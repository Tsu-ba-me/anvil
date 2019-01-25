### Alteeve's Niche! Inc. - Anvil! Intelligent Availability(tm) Platform
# License: GPLv2
# Built:   2018-09-13
# Target:  Network Install (PXE)
# OS:      Fedora28
# Machine: Striker Dashboard
# NOTE:    Do no use any non-ASCII characters in this kickstart script.

# Install using text screens, most compatible with modest hardware, too.
text

### TODO: Might want to remove this for Striker.
# Agree to the eula
eula --agreed

# Don't run the "firstboot" tool, we should have everything configured.
firstboot --disable

# Reboot when the install is done.
reboot

# Install from the source Striker
url --url=http://10.201.4.1/rhel8/x86_64/os/

### TODO: These should be configurable eventually.
# Keyboard layouts
keyboard --vckeymap=us --xlayouts='us'
timezone Etc/GMT --isUtc
lang en_CA.UTF-8

# Network information
network --hostname=new-striker.localdomain
# Root and admin passwords are 'Initial1'
rootpw --plaintext Initial1
user --name=admin --password "Initial1" --plaintext --gecos "admin" --groups wheel

# TEMPORARY: Set selinux to permissive
#selinux --permissive

# Partitioning plan is generated by the %pre script. 
%include /tmp/plan_partitions.out

%packages
@^server-product-environment
@server-hardware-support

%end

%addon com_redhat_kdump --disable --reserve-mb='128'

%end

%anaconda
pwpolicy root --minlen=6 --minquality=1 --notstrict --nochanges --notempty
pwpolicy user --minlen=6 --minquality=1 --notstrict --nochanges --emptyok
pwpolicy luks --minlen=6 --minquality=1 --notstrict --nochanges --notempty
%end



#############################################################################################################
# %ost, --nochroot scripts                                                                                  #
#############################################################################################################

### TODO: Might want to remove this pre-production. Useful for debugging until then.
# Record all the install logs for future reference. 
%post --nochroot
echo 'Copying all the anaconda related log files to /root/install/'

mkdir -p /mnt/sysimage/root/install_logs/var
mkdir -p /mnt/sysimage/root/install_logs/run
rsync -av /tmp         /mnt/sysimage/root/install_logs/
rsync -av /run/install /mnt/sysimage/root/install_logs/run/
rsync -av /var/log     /mnt/sysimage/root/install_logs/var/
%end


#############################################################################################################
# %pre scripts                                                                                              #
#############################################################################################################

### This is the small anaconda-friendly perl program that looks at the 
### available storage and chooses a drive to install on. Then it generates 
### the kickstart partition instructions and records them in:
### /tmp/plan_partitions.out 

### NOTE: This must be copied from 'scripts/plan_partitions', don't edit directly *EXCEPT* to set the '$type'
###       just below, which *MUST* be set, or the script will fail.
%pre --interpreter /bin/perl
#!/bin/perl
# 
# This script is designed to identify hard drives and decide where and how to partition it for installation 
# during a kickstart install. 
# 
# Exit codes;
# 0 - Success
# 1 - Target type not specified.
# 2 - Failed to find a drive to install on.
# 
# NOTE: This is restricted to what is available during an anaconda install session. That is to same, bare 
#       minimum.
# TODO: If multiple matching drives are found (same medium and size, build an appropriate RAID array.
# TODO: in pre, wipefs on all disks to clear old LVM and DRBD data
# 

use strict;
use warnings;

# Set to '1' for verbose output 
my $debug = 0;

### NOTE: This must be set to 'striker', 'node' or 'dr' when incorporated into a kickstart %pre script!
my $type  = "striker";
if ($type =~ /striker/i)
{
	print "Finding install drive for a Striker dashboard.\n";
	$type = "striker";
}
elsif ($type =~ /node/i)
{
	print "Finding install drive for an Anvil! node.\n";
	$type = "node";
}
elsif ($type =~ /dr/i)
{
	print "Finding install drive for a DR (disaster recovery) host.\n";
	$type = "dr";
}
else
{
	print "
Error: Target type not specified.
Be sure that '\$type' is set to 'striker', 'node' or 'dr' in the \%pre section 
of the kickstart script
";
	exit(1);
}

my $device = {};

# We might want to add HCTL (Host:Channel:Target:Lun for SCSI) and/or SUBSYSTEMS later
my $target = "";
my $lsblk  = system_call("/bin/lsblk --bytes --paths --pairs --output NAME,RM,HOTPLUG,TYPE,SIZE,TRAN,ROTA");
foreach my $line (split/\n/, $lsblk)
{
	### NOTE: If a drive has no transport, is not removable, but is hotplugable and the device path is 
	###       mmcblk0, it is probably an SDCard. It doesn't seem to be a directly divinable state. We 
	###       don't currently plan to use them, but it might come to pass later.
	print __LINE__."; [ Debug ] - lsblk: [".$line."]\n" if $debug;
	my ($path, $removable, $hotplug, $type, $size, $transport, $rotational) = ($line =~ /NAME="(.*?)" RM="(\d)" HOTPLUG="(\d)" TYPE="(.*?)" SIZE="(\d+)" TRAN="(.*?)" ROTA="(\d)"/);
	print __LINE__."; [ Debug ] - Device: [".$path."], type: [".$type."], remvoable? [".$removable."], hotplug? [".$hotplug."], rotational? [".$rotational."], transport: [".$transport."], size: [".$size."]\n" if $debug;
	# Skip 'zramX' devices
	next if ($path =~ /^\/dev\/zram\d/);
	# Skip removable disks and anything that just isn't a disk at all.
	next if (($removable) or ($hotplug) or ($type ne "disk"));
	$device->{$path} = {
		type       => $type,
		size       => $size, 
		transport  => $transport, 
		rotational => $rotational, 
	};
	if ($device->{$path}{rotational})
	{
		print "Analyzing platter drive: [".$path."], using the transport: [".$device->{$path}{transport}."], of the size: [".$device->{$path}{size}." (".hr_size($device->{$path}{size}).")]\n";
	}
	else
	{
		print "Analyzing solid-state drive: [".$path."], using the transport: [".$device->{$path}{transport}."], of the size: [".$device->{$path}{size}." (".hr_size($device->{$path}{size}).")]\n";
	}
}

### Usage selection priority
# on Striker, we'll simply use whatever is the biggest avalable drive.
# on Node and DR, we'll prefer slowest first (rotational, sata before nvme/scsi), and smallest second. 
my $use_drive = "";
if ($type eq "striker")
{
	my $biggest_size = 0;
	foreach my $path (sort {$a cmp $b} keys %{$device})
	{
		print __LINE__."; [ Debug ] - path: [".$path."], ${path}::size: [".$device->{$path}{size}." (".hr_size($device->{$path}{size}).")] < biggest_size: [".$biggest_size." (".hr_size($biggest_size).")]\n" if $debug;
		if ($device->{$path}{size} > $biggest_size)
		{
			$biggest_size = $device->{$path}{size}; 
			$use_drive    = $path;
			print __LINE__."; [ Debug ] - use_drive: [".$use_drive."], biggest_size: [".$biggest_size." (".hr_size($biggest_size).")]\n" if $debug;
		}
	}
	if ($use_drive)
	{
		print "Selected the largest disk: [".$use_drive."], which has a capacity of: [".hr_size($device->{$use_drive}{size})."]\n";
	}
}
else
{
	# Node and DR are handled the same
	my $first_disk_seen     = 0;
	my $smallest_size       = 0;
	my $selected_is_platter = 0;
	foreach my $path (sort {$a cmp $b} keys %{$device})
	{
		print __LINE__."; [ Debug ] - first_disk_seen: [".$first_disk_seen."], path: [".$path."], ${path}::rotational: [".$device->{$path}{rotational}."]\n" if $debug;
		if (not $first_disk_seen)
		{
			# Select this one
			$first_disk_seen     = 1;
			$use_drive           = $path;
			$smallest_size       = $device->{$path}{size};
			$selected_is_platter = $device->{$path}{rotational};
			print __LINE__."; [ Debug ] - first_disk_seen: [".$first_disk_seen."], use_drive: [".$use_drive."], selected_is_platter: [".$selected_is_platter."], smallest_size: [".$smallest_size." (".hr_size($smallest_size).")]\n" if $debug;
		}
		elsif ($device->{$path}{rotational})
		{
			# This takes priority 
			print __LINE__."; [ Debug ] - selected_is_platter: [".$selected_is_platter."]\n" if $debug;
			if ($selected_is_platter)
			{
				# Was the previously seen drive bigger?
				print __LINE__."; [ Debug ] - ".$path."::size: [".$first_disk_seen." (".hr_size($first_disk_seen).")], smallest_size: [".$smallest_size." (".hr_size($smallest_size).")]\n" if $debug;
				if ($device->{$path}{size} < $smallest_size)
				{
					# This is smaller, use it.
					$use_drive     = $path;
					$smallest_size = $device->{$path}{size};
					print __LINE__."; [ Debug ] - use_drive: [".$use_drive."], smallest_size: [".$smallest_size." (".hr_size($smallest_size).")]\n" if $debug;
				}
			}
			else
			{
				# The previous drive is an SSD, so use this one regardless
				$use_drive           = $path;
				$smallest_size       = $device->{$path}{size};
				$selected_is_platter = $device->{$path}{rotational};
				print __LINE__."; [ Debug ] - use_drive: [".$use_drive."], selected_is_platter: [".$selected_is_platter."], smallest_size: [".$smallest_size." (".hr_size($smallest_size).")]\n" if $debug;
			}
		}
		elsif (not $selected_is_platter)
		{
			# This is an SSD, but we haven't seen a platter drive yet, so use it if it is 
			# smaller.
			print __LINE__."; [ Debug ] - ".$path."::size: [".$first_disk_seen." (".hr_size($first_disk_seen).")], smallest_size: [".$smallest_size." (".hr_size($smallest_size).")]\n" if $debug;
			if ($device->{$path}{size} < $smallest_size)
			{
				# This is smaller, use it.
				$use_drive     = $path;
				$smallest_size = $device->{$path}{size};
				print __LINE__."; [ Debug ] - use_drive: [".$use_drive."], smallest_size: [".$smallest_size." (".hr_size($smallest_size).")]\n" if $debug;
			}
		}
	}
	
	# Did we find a drive?
	if ($use_drive)
	{
		if ($selected_is_platter)
		{
			print "Selected the smallest platter drive: [".$use_drive."], which has a capacity of: [".hr_size($device->{$use_drive}{size})."]\n";
		}
		else
		{
			print "Selected the smallest solid-state drive: [".$use_drive."], which has a capacity of: [".hr_size($device->{$use_drive}{size})."] (no platter drives found)\n";
		}
	}
}

# Did we find a disk to use?
if (not $use_drive)
{
	print "[ Error ] - Failed to find any fixed drives (platter or USB, not removable) to install onto. Unable to proceed.\n";
	exit(2);
}

# Pick up a bit of a UUID to add to the volume group name.
my $id = time;
if ((-e "/sys/class/dmi/id/product_uuid") && (-r "/sys/class/dmi/id/product_uuid"))
{
	# We should be able to read the system UUID. If so, we'll take the starting part of the string for 
	# the short ID.
	my $uuid       = "";
	my $shell_call = "/sys/class/dmi/id/product_uuid";
	print __LINE__."; [ Debug ] - shell_call: [".$shell_call."]\n" if $debug;
	open (my $file_handle, "<", $shell_call) or die "Failed to read: [".$shell_call."], the error was: ".$!."\n";
	while(<$file_handle>)
	{
		chomp;
		$uuid = $_;
		print __LINE__."; [ Debug ] - uuid: [".$uuid."]\n" if $debug;
	}
	close $file_handle;
	
	if ($uuid =~ /^(\w+)-/)
	{
		$id = $1;
		print __LINE__."; [ Debug ] - id: [".$id."]\n" if $debug;
	}
}

# Finally, we've got our output.
my $say_grow       = $type eq "striker" ? "--grow " : "";
my $vg_name        = $type."_".$id;
my $partition_file = "/tmp/plan_partitions.out";
my $partition_body = "zerombr
clearpart --all --drives=".$use_drive."
ignoredisk --only-use=".$use_drive."
bootloader --location=mbr --driveorder=".$use_drive." --boot-drive=".$use_drive."

# Partitions
part biosboot --fstype=biosboot --size=1
part /boot    --fstype=ext4     --size=1024 --asprimary --ondisk=".$use_drive."
part pv.01    --fstype=lvmpv    --size=100  --asprimary --ondisk=".$use_drive." --grow

# LVM Volume groups
volgroup ".$vg_name." --pesize=4096 pv.01

# LVM logical volumes
logvol swap --fstype=swap --size=8188  --name=lv_swap --vgname=".$vg_name."
logvol /    --fstype=xfs  --size=40960 --name=lv_root --vgname=".$vg_name." ".$say_grow."
";
print __LINE__."; [ Debug ] - partition_body: [".$partition_body."]\n" if $debug;
print "Writing out the partition plan to: [".$partition_file."]\n";

# Write it to the temp file that the kickstart's %include will look for.
my $shell_call = $partition_file;
print __LINE__."; [ Debug ] - shell_call: [".$shell_call."]\n" if $debug;
open (my $file_handle, ">", $shell_call) or die "Failed to write: [".$shell_call."], the error was: ".$!."\n";
print $file_handle $partition_body;
close $file_handle;
print "Completed successfully, exiting.\n";

# We're done.
exit(0);


### Functions
# Make the size easier to read for users
sub hr_size
{
	my ($size) = @_;
	
	my $hr_size = $size;
	
	if ($size < 1023)
	{
		# Bytes
		$hr_size .= " B";
	}
	elsif ($size < (2 ** 20))
	{
		# Kibibyte
		$hr_size = sprintf("%.1f", ($size /= (2 ** 10)))." KiB";
	}
	elsif ($size < (2 ** 30))
	{
		# Mebibyte
		$hr_size = sprintf("%.2f", ($size /= (2 ** 20)))." MiB";
	}
	elsif ($size < (2 ** 40))
	{
		# Gibibyte
		$hr_size = sprintf("%.2f", ($size /= (2 ** 30)))." GiB";
	}
	elsif ($size < (2 ** 50))
	{
		# Tebibyte
		$hr_size = sprintf("%.2f", ($size /= (2 ** 40)))." TiB";
	}
	else
	{
		# Pebibyte or higher
		$hr_size = sprintf("%.3f", ($size /= (2 ** 40)))." PiB";
	}
	
	return($hr_size);
}

sub system_call
{
	my ($command) = @_;
	my $output = "";
	open (my $file_handle, $command." 2>&1 |") or die "Failed to call: [".$command."], error was: [".$!."]\n";
	while (<$file_handle>)
	{
		chomp;
		my $line =  $_;
      		   $line =~ s/\n$//;
      		   $line =~ s/\r$//;
		$output .= $line."\n";
	}
	close $file_handle;
	$output =~ s/\n$//s;

	return($output);
}
%end
