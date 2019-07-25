package Anvil::Tools::DRBD;
# 
# This module contains methods used to manager DRBD 9
# 

use strict;
use warnings;
use Scalar::Util qw(weaken isweak);
use Data::Dumper;

our $VERSION  = "3.0.0";
my $THIS_FILE = "DRBD.pm";

### Methods;
# status

=pod

=encoding utf8

=head1 NAME

Anvil::Tools::DRBD

Provides all methods related to managing DRBD version 9.

=head1 SYNOPSIS

 use Anvil::Tools;

 # Get a common object handle on all Anvil::Tools modules.
 my $anvil = Anvil::Tools->new();
 
 # Access to methods using '$anvil->DRBD->X'. 
 # 
 # 

=head1 METHODS

Methods in this module;

=cut
sub new
{
	my $class = shift;
	my $self  = {
	};
	
	bless $self, $class;
	
	return ($self);
}

# Get a handle on the Anvil::Tools object. I know that technically that is a sibling module, but it makes more 
# sense in this case to think of it as a parent.
sub parent
{
	my $self   = shift;
	my $parent = shift;
	
	$self->{HANDLE}{TOOLS} = $parent if $parent;
	
	# Defend against memory leads. See Scalar::Util'.
	if (not isweak($self->{HANDLE}{TOOLS}))
	{
		weaken($self->{HANDLE}{TOOLS});;
	}
	
	return ($self->{HANDLE}{TOOLS});
}

#############################################################################################################
# Public methods                                                                                            #
#############################################################################################################

=head2 get_status

This parses the DRBD status on the local or remote system. The data collected is stored in the following hashes;

 - drbd::status::<hostname>::resource::<resource_name>::{ap-in-flight,congested,connection-state,peer-node-id,rs-in-flight}
 - drbd::status::<hostname>::resource::<resource_name>::connection::<peer_hostname>::volume::<volume>::{has-online-verify-details,has-sync-details,out-of-sync,peer-client,peer-disk-state,pending,percent-in-sync,received,replication-state,resync-suspended,sent,unacked}
 - # If the volume is resyncing, these additional values will be set:
 - drbd::status::<hostname>::resource::<resource_name>::connection::<peer_hostname>::volume::<volume>::{db-dt MiB-s,db0-dt0 MiB-s,db1-dt1 MiB-s,estimated-seconds-to-finish,percent-resync-done,rs-db0-sectors,rs-db1-sectors,rs-dt-start-ms,rs-dt0-ms,rs-dt1-ms,rs-failed,rs-paused-ms,rs-same-csum,rs-total,want}
 - drbd::status::<hostname>::resource::<resource>::devices::volume::<volume>::{al-writes,bm-writes,client,disk-state,lower-pending,minor,quorum,read,size,upper-pending,written}

If any data for the host was stored in a previous call, it will be deleted before the new data is collected and stored.

Parameters;

=head3 password (optional)

This is the password to use when connecting to a remote machine. If not set, but C<< target >> is, an attempt to connect without a password will be made.

=head3 port (optional)

This is the TCP port to use when connecting to a remote machine. If not set, but C<< target >> is, C<< 22 >> will be used.

=head3 remote_user (optional, default 'root')

If C<< target >> is set, this will be the user we connect to the remote machine as.

=head3 target (optional)

This is the IP or host name of the machine to read the version of. If this is not set, the local system's version is checked.

=cut
# NOTE: the version is set in anvil.spec by sed'ing the release and arch onto anvil.version in anvil-core's %post
sub get_status
{
	my $self      = shift;
	my $parameter = shift;
	my $anvil     = $self->parent;
	my $debug     = defined $parameter->{debug} ? $parameter->{debug} : 3;
	
	my $password    = defined $parameter->{password}    ? $parameter->{password}    : "";
	my $port        = defined $parameter->{port}        ? $parameter->{port}        : "";
	my $remote_user = defined $parameter->{remote_user} ? $parameter->{remote_user} : "root";
	my $target      = defined $parameter->{target}      ? $parameter->{target}      : "local";
	$anvil->Log->variables({source => $THIS_FILE, line => __LINE__, level => $debug, list => { 
		password    => $anvil->Log->secure ? $password : $anvil->Words->string({key => "log_0186"}),
		port        => $port, 
		remote_user => $remote_user, 
		target      => $target, 
	}});
	
	# Is this a local call or a remote call?
	my $shell_call = $anvil->data->{path}{exe}{drbdsetup}." status --json";
	my $output     = "";
	my $host       = $anvil->_short_hostname({debug => $debug});
	if (($target) && ($target ne "local") && ($target ne $anvil->_hostname) && ($target ne $anvil->_short_hostname))
	{
		# Clear the hash where we'll store the data.
		$host = $target;
		if (exists $anvil->data->{drbd}{status}{$host})
		{
			delete $anvil->data->{drbd}{status}{$host};
		}
		
		# Remote call.
		($output, my $error, $anvil->data->{drbd}{status}{$host}{return_code}) = $anvil->Remote->call({
			debug       => $debug, 
			shell_call  => $shell_call, 
			target      => $target,
			port        => $port, 
			password    => $password,
			remote_user => $remote_user, 
		});
		$anvil->Log->variables({source => $THIS_FILE, line => __LINE__, level => $debug, list => { 
			error                                => $error,
			output                               => $output,
			"drbd::status::${host}::return_code" => $anvil->data->{drbd}{status}{return_code},
		}});
	}
	else
	{
		# Clear the hash where we'll store the data.
		if (exists $anvil->data->{drbd}{status}{$host})
		{
			delete $anvil->data->{drbd}{status}{$host};
		}
		
		# Local.
		($output, $anvil->data->{drbd}{status}{return_code}) = $anvil->System->call({shell_call => $shell_call});
		$anvil->Log->variables({source => $THIS_FILE, line => __LINE__, level => $debug, list => { output => $output, return_code => $return_code }});
	}
	
	# Parse the output.
	my $json        = JSON->new->allow_nonref;
	my $drbd_status = $json->decode($output);
	foreach my $hash_ref (@{$drbd_status})
	{
		my $resource = $hash_ref->{name};
		$anvil->Log->variables({source => $THIS_FILE, line => __LINE__, level => $debug, list => { resource => $resource }});
		
		$anvil->data->{drbd}{status}{$host}{resource}{$resource}{role}             = $hash_ref->{role};
		$anvil->data->{drbd}{status}{$host}{resource}{$resource}{'node-id'}        = $hash_ref->{'node-id'};
		$anvil->data->{drbd}{status}{$host}{resource}{$resource}{suspended}        = $hash_ref->{suspended};
		$anvil->data->{drbd}{status}{$host}{resource}{$resource}{'write-ordering'} = $hash_ref->{'write-ordering'};
		$anvil->Log->variables({source => $THIS_FILE, line => __LINE__, level => $debug, list => { 
			"drbd::status::${host}::resource::${resource}::role"           => $anvil->data->{drbd}{status}{$host}{resource}{$resource}{role},
			"drbd::status::${host}::resource::${resource}::node-id"        => $anvil->data->{drbd}{status}{$host}{resource}{$resource}{'node-id'},
			"drbd::status::${host}::resource::${resource}::suspended"      => $anvil->data->{drbd}{status}{$host}{resource}{$resource}{suspended},
			"drbd::status::${host}::resource::${resource}::write-ordering" => $anvil->data->{drbd}{status}{$host}{resource}{$resource}{'write-ordering'},
		}});
		
		my $count_i = @{$hash_ref->{connections}};
		for (my $i = 0; $i < $count_i; $i++)
		{
			#print "i: [$i]\n";
			my $peer_name = $hash_ref->{connections}->[$i]->{name};
			$anvil->Log->variables({source => $THIS_FILE, line => __LINE__, level => $debug, list => { peer_name => $peer_name }});
			
			$anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{'ap-in-flight'}     = $hash_ref->{connections}->[$i]->{'ap-in-flight'};
			$anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{congested}          = $hash_ref->{connections}->[$i]->{congested};
			$anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{'connection-state'} = $hash_ref->{connections}->[$i]->{'connection-state'};
			$anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{'peer-node-id'}     = $hash_ref->{connections}->[$i]->{'peer-node-id'};
			$anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{'rs-in-flight'}     = $hash_ref->{connections}->[$i]->{'rs-in-flight'};
			$anvil->Log->variables({source => $THIS_FILE, line => __LINE__, level => $debug, list => { 
				"drbd::status::${host}::resource::${resource}::connection::${peer_name}::ap-in-flight"     => $anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{'ap-in-flight'},
				"drbd::status::${host}::resource::${resource}::connection::${peer_name}::congested"        => $anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{congested},
				"drbd::status::${host}::resource::${resource}::connection::${peer_name}::connection-state" => $anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{'connection-state'},
				"drbd::status::${host}::resource::${resource}::connection::${peer_name}::peer-node-id"     => $anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{'peer-node-id'},
				"drbd::status::${host}::resource::${resource}::connection::${peer_name}::rs-in-flight"     => $anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{'rs-in-flight'},
			}});
			
			my $count_j = @{$hash_ref->{connections}->[$i]->{peer_devices}};
			for (my $j = 0; $j < $count_j; $j++)
			{
				my $volume = $hash_ref->{connections}->[$i]->{peer_devices}->[$j]->{volume};
				$anvil->Log->variables({source => $THIS_FILE, line => __LINE__, level => $debug, list => { volume => $volume }});
				
				$anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{'has-online-verify-details'} = $hash_ref->{connections}->[$i]->{peer_devices}->[$j]->{'has-online-verify-details'};
				$anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{'has-sync-details'}          = $hash_ref->{connections}->[$i]->{peer_devices}->[$j]->{'has-sync-details'};
				$anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{'out-of-sync'}               = $hash_ref->{connections}->[$i]->{peer_devices}->[$j]->{'out-of-sync'};
				$anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{'peer-client'}               = $hash_ref->{connections}->[$i]->{peer_devices}->[$j]->{'peer-client'};
				$anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{'peer-disk-state'}           = $hash_ref->{connections}->[$i]->{peer_devices}->[$j]->{'peer-disk-state'};
				$anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{pending}                     = $hash_ref->{connections}->[$i]->{peer_devices}->[$j]->{pending};
				$anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{'percent-in-sync'}           = $hash_ref->{connections}->[$i]->{peer_devices}->[$j]->{'percent-in-sync'};
				$anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{received}                    = $hash_ref->{connections}->[$i]->{peer_devices}->[$j]->{received};
				$anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{'replication-state'}         = $hash_ref->{connections}->[$i]->{peer_devices}->[$j]->{'replication-state'};
				$anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{'resync-suspended'}          = $hash_ref->{connections}->[$i]->{peer_devices}->[$j]->{'resync-suspended'};
				$anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{sent}                        = $hash_ref->{connections}->[$i]->{peer_devices}->[$j]->{sent};
				$anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{unacked}                     = $hash_ref->{connections}->[$i]->{peer_devices}->[$j]->{unacked};
				$anvil->Log->variables({source => $THIS_FILE, line => __LINE__, level => $debug, list => { 
					"drbd::status::${host}::resource::${resource}::connection::${peer_name}::volume::${volume}::has-online-verify-details" => $anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{'has-online-verify-details'},
					"drbd::status::${host}::resource::${resource}::connection::${peer_name}::volume::${volume}::has-sync-details"          => $anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{'has-sync-details'},
					"drbd::status::${host}::resource::${resource}::connection::${peer_name}::volume::${volume}::out-of-sync"               => $anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{'out-of-sync'},
					"drbd::status::${host}::resource::${resource}::connection::${peer_name}::volume::${volume}::peer-client"               => $anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{'peer-client'},
					"drbd::status::${host}::resource::${resource}::connection::${peer_name}::volume::${volume}::peer-disk-state"           => $anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{'peer-disk-state'},
					"drbd::status::${host}::resource::${resource}::connection::${peer_name}::volume::${volume}::pending"                   => $anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{pending},
					"drbd::status::${host}::resource::${resource}::connection::${peer_name}::volume::${volume}::percent-in-sync"           => $anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{'percent-in-sync'},
					"drbd::status::${host}::resource::${resource}::connection::${peer_name}::volume::${volume}::received"                  => $anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{received},
					"drbd::status::${host}::resource::${resource}::connection::${peer_name}::volume::${volume}::replication-state"         => $anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{'replication-state'},
					"drbd::status::${host}::resource::${resource}::connection::${peer_name}::volume::${volume}::resync-suspended"          => $anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{'resync-suspended'},
					"drbd::status::${host}::resource::${resource}::connection::${peer_name}::volume::${volume}::sent"                      => $anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{sent},
					"drbd::status::${host}::resource::${resource}::connection::${peer_name}::volume::${volume}::unacked"                   => $anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{unacked},
				}});
				
				### NOTE: 03:54 < lge> t0, t1, ...: time stamps. db/dt (0,1,...): delta blocks per delta time: the "estimated average" resync rate in kB/s from tX to now.
				#         03:57 < lge> time stamps and block gauges are send by the module, the rate is then calculated by the tool, so if there are funny numbers, you have to tool closely if the data from the module is already bogus, or if just the calculation in the tool is off.
				# These are set during a resync
				$anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{'db-dt MiB-s'}                 = defined $hash_ref->{connections}->[$i]->{peer_devices}->[$j]->{'db/dt [MiB/s]'}               ? $hash_ref->{connections}->[$i]->{peer_devices}->[$j]->{'db/dt [MiB/s]'}               : 0;
				$anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{'db0-dt0 MiB-s'}               = defined $hash_ref->{connections}->[$i]->{peer_devices}->[$j]->{'db0/dt0 [MiB/s]'}             ? $hash_ref->{connections}->[$i]->{peer_devices}->[$j]->{'db0/dt0 [MiB/s]'}             : 0;
				$anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{'db1-dt1 MiB-s'}               = defined $hash_ref->{connections}->[$i]->{peer_devices}->[$j]->{'db1/dt1 [MiB/s]'}             ? $hash_ref->{connections}->[$i]->{peer_devices}->[$j]->{'db1/dt1 [MiB/s]'}             : 0;
				$anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{'estimated-seconds-to-finish'} = defined $hash_ref->{connections}->[$i]->{peer_devices}->[$j]->{'estimated-seconds-to-finish'} ? $hash_ref->{connections}->[$i]->{peer_devices}->[$j]->{'estimated-seconds-to-finish'} : 0;
				$anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{'percent-resync-done'}         = defined $hash_ref->{connections}->[$i]->{peer_devices}->[$j]->{'percent-resync-done'}         ? $hash_ref->{connections}->[$i]->{peer_devices}->[$j]->{'percent-resync-done'}         : 100;
				$anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{'rs-db0-sectors'}              = defined $hash_ref->{connections}->[$i]->{peer_devices}->[$j]->{'rs-db0-sectors'}              ? $hash_ref->{connections}->[$i]->{peer_devices}->[$j]->{'rs-db0-sectors'}              : 0;
				$anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{'rs-db1-sectors'}              = defined $hash_ref->{connections}->[$i]->{peer_devices}->[$j]->{'rs-db1-sectors'}              ? $hash_ref->{connections}->[$i]->{peer_devices}->[$j]->{'rs-db1-sectors'}              : 0;
				$anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{'rs-dt-start-ms'}              = defined $hash_ref->{connections}->[$i]->{peer_devices}->[$j]->{'rs-dt-start-ms'}              ? $hash_ref->{connections}->[$i]->{peer_devices}->[$j]->{'rs-dt-start-ms'}              : 0;
				$anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{'rs-dt0-ms'}                   = defined $hash_ref->{connections}->[$i]->{peer_devices}->[$j]->{'rs-dt0-ms'}                   ? $hash_ref->{connections}->[$i]->{peer_devices}->[$j]->{'rs-dt0-ms'}                   : 0;
				$anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{'rs-dt1-ms'}                   = defined $hash_ref->{connections}->[$i]->{peer_devices}->[$j]->{'rs-dt1-ms'}                   ? $hash_ref->{connections}->[$i]->{peer_devices}->[$j]->{'rs-dt1-ms'}                   : 0;
				$anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{'rs-failed'}                   = defined $hash_ref->{connections}->[$i]->{peer_devices}->[$j]->{'rs-failed'}                   ? $hash_ref->{connections}->[$i]->{peer_devices}->[$j]->{'rs-failed'}                   : 0;
				$anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{'rs-paused-ms'}                = defined $hash_ref->{connections}->[$i]->{peer_devices}->[$j]->{'rs-paused-ms'}                ? $hash_ref->{connections}->[$i]->{peer_devices}->[$j]->{'rs-paused-ms'}                : 0;
				$anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{'rs-same-csum'}                = defined $hash_ref->{connections}->[$i]->{peer_devices}->[$j]->{'rs-same-csum'}                ? $hash_ref->{connections}->[$i]->{peer_devices}->[$j]->{'rs-same-csum'}                : 0;
				$anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{'rs-total'}                    = defined $hash_ref->{connections}->[$i]->{peer_devices}->[$j]->{'rs-total'}                    ? $hash_ref->{connections}->[$i]->{peer_devices}->[$j]->{'rs-total'}                    : 0;
				$anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{want}                          = defined $hash_ref->{connections}->[$i]->{peer_devices}->[$j]->{want}                          ? $hash_ref->{connections}->[$i]->{peer_devices}->[$j]->{want}                          : 0;
				$anvil->Log->variables({source => $THIS_FILE, line => __LINE__, level => $debug, list => { 
					"drbd::status::${host}::resource::${resource}::connection::${peer_name}::volume::${volume}::db-dt MiB-s"                 => $anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{'db-dt MiB-s'},
					"drbd::status::${host}::resource::${resource}::connection::${peer_name}::volume::${volume}::db0-dt0 MiB-s"               => $anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{'db0-dt0 MiB-s'},
					"drbd::status::${host}::resource::${resource}::connection::${peer_name}::volume::${volume}::db1-dt1 MiB-s"               => $anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{'db1-dt1 MiB-s'},
					"drbd::status::${host}::resource::${resource}::connection::${peer_name}::volume::${volume}::estimated-seconds-to-finish" => $anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{'estimated-seconds-to-finish'},
					"drbd::status::${host}::resource::${resource}::connection::${peer_name}::volume::${volume}::percent-resync-done"         => $anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{'percent-resync-done'},
					"drbd::status::${host}::resource::${resource}::connection::${peer_name}::volume::${volume}::rs-db0-sectors"              => $anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{'rs-db0-sectors'},
					"drbd::status::${host}::resource::${resource}::connection::${peer_name}::volume::${volume}::rs-db1-sectors"              => $anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{'rs-db1-sectors'},
					"drbd::status::${host}::resource::${resource}::connection::${peer_name}::volume::${volume}::rs-dt-start-ms"              => $anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{'rs-dt-start-ms'},
					"drbd::status::${host}::resource::${resource}::connection::${peer_name}::volume::${volume}::rs-dt0-ms"                   => $anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{'rs-dt0-ms'},
					"drbd::status::${host}::resource::${resource}::connection::${peer_name}::volume::${volume}::rs-dt1-ms"                   => $anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{'rs-dt1-ms'},
					"drbd::status::${host}::resource::${resource}::connection::${peer_name}::volume::${volume}::rs-failed"                   => $anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{'rs-failed'},
					"drbd::status::${host}::resource::${resource}::connection::${peer_name}::volume::${volume}::rs-paused-ms"                => $anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{'rs-paused-ms'},
					"drbd::status::${host}::resource::${resource}::connection::${peer_name}::volume::${volume}::rs-same-csum"                => $anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{'rs-same-csum'},
					"drbd::status::${host}::resource::${resource}::connection::${peer_name}::volume::${volume}::rs-total"                    => $anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{'rs-total'},
					"drbd::status::${host}::resource::${resource}::connection::${peer_name}::volume::${volume}::want"                        => $anvil->data->{drbd}{status}{$host}{resource}{$resource}{connection}{$peer_name}{volume}{$volume}{want},
				}});
			}
		}
		
		$count_i = @{$hash_ref->{devices}};
		#print "hash_ref->{devices}: [".$hash_ref->{devices}."], count_i: [$count_i]\n";
 		for (my $i = 0; $i < $count_i; $i++)
		{
			#print "i: [$i], [".$hash_ref->{devices}->[$i]."]\n";
			my $volume = $hash_ref->{devices}->[$i]->{volume};
			$anvil->Log->variables({source => $THIS_FILE, line => __LINE__, level => $debug, list => { volume => $volume }});
			
			$anvil->data->{drbd}{status}{$host}{resource}{$resource}{devices}{volume}{$volume}{'al-writes'}     = $hash_ref->{devices}->[$i]->{'al-writes'};
			$anvil->data->{drbd}{status}{$host}{resource}{$resource}{devices}{volume}{$volume}{'bm-writes'}     = $hash_ref->{devices}->[$i]->{'bm-writes'};
			$anvil->data->{drbd}{status}{$host}{resource}{$resource}{devices}{volume}{$volume}{client}          = $hash_ref->{devices}->[$i]->{client};
			$anvil->data->{drbd}{status}{$host}{resource}{$resource}{devices}{volume}{$volume}{'disk-state'}    = $hash_ref->{devices}->[$i]->{'disk-state'};
			$anvil->data->{drbd}{status}{$host}{resource}{$resource}{devices}{volume}{$volume}{'lower-pending'} = $hash_ref->{devices}->[$i]->{'lower-pending'};
			$anvil->data->{drbd}{status}{$host}{resource}{$resource}{devices}{volume}{$volume}{minor}           = $hash_ref->{devices}->[$i]->{minor};
			$anvil->data->{drbd}{status}{$host}{resource}{$resource}{devices}{volume}{$volume}{quorum}          = $hash_ref->{devices}->[$i]->{quorum};
			$anvil->data->{drbd}{status}{$host}{resource}{$resource}{devices}{volume}{$volume}{'read'}          = $hash_ref->{devices}->[$i]->{'read'};
			$anvil->data->{drbd}{status}{$host}{resource}{$resource}{devices}{volume}{$volume}{size}            = $hash_ref->{devices}->[$i]->{size};
			$anvil->data->{drbd}{status}{$host}{resource}{$resource}{devices}{volume}{$volume}{'upper-pending'} = $hash_ref->{devices}->[$i]->{'upper-pending'};
			$anvil->data->{drbd}{status}{$host}{resource}{$resource}{devices}{volume}{$volume}{written}         = $hash_ref->{devices}->[$i]->{written};
			$anvil->Log->variables({source => $THIS_FILE, line => __LINE__, level => $debug, list => { 
				"drbd::status::${host}::resource::${resource}::devices::volume::${volume}::al-writes"     => $anvil->data->{drbd}{status}{$host}{resource}{$resource}{devices}{volume}{$volume}{'al-writes'},
				"drbd::status::${host}::resource::${resource}::devices::volume::${volume}::bm-writes"     => $anvil->data->{drbd}{status}{$host}{resource}{$resource}{devices}{volume}{$volume}{'bm-writes'},
				"drbd::status::${host}::resource::${resource}::devices::volume::${volume}::client"        => $anvil->data->{drbd}{status}{$host}{resource}{$resource}{devices}{volume}{$volume}{client},
				"drbd::status::${host}::resource::${resource}::devices::volume::${volume}::disk-state"    => $anvil->data->{drbd}{status}{$host}{resource}{$resource}{devices}{volume}{$volume}{'disk-state'},
				"drbd::status::${host}::resource::${resource}::devices::volume::${volume}::lower-pending" => $anvil->data->{drbd}{status}{$host}{resource}{$resource}{devices}{volume}{$volume}{'lower-pending'},
				"drbd::status::${host}::resource::${resource}::devices::volume::${volume}::minor"         => $anvil->data->{drbd}{status}{$host}{resource}{$resource}{devices}{volume}{$volume}{minor},
				"drbd::status::${host}::resource::${resource}::devices::volume::${volume}::quorum"        => $anvil->data->{drbd}{status}{$host}{resource}{$resource}{devices}{volume}{$volume}{quorum},
				"drbd::status::${host}::resource::${resource}::devices::volume::${volume}::read"          => $anvil->data->{drbd}{status}{$host}{resource}{$resource}{devices}{volume}{$volume}{'read'},
				"drbd::status::${host}::resource::${resource}::devices::volume::${volume}::size"          => $anvil->data->{drbd}{status}{$host}{resource}{$resource}{devices}{volume}{$volume}{size},
				"drbd::status::${host}::resource::${resource}::devices::volume::${volume}::upper-pending" => $anvil->data->{drbd}{status}{$host}{resource}{$resource}{devices}{volume}{$volume}{'upper-pending'},
				"drbd::status::${host}::resource::${resource}::devices::volume::${volume}::written"       => $anvil->data->{drbd}{status}{$host}{resource}{$resource}{devices}{volume}{$volume}{written},
			}});
		}
		
# 		foreach my $key (sort {$a cmp $b} keys %{$hash_ref})
# 		{
# 			next if $key eq "name";
# 			next if $key eq "role";
# 			next if $key eq "node-id";
# 			next if $key eq "suspended";
# 			next if $key eq "write-ordering";
# 			next if $key eq "connections";
# 			next if $key eq "devices";
# 			print "Key: [$key] -> [".$hash_ref->{$key}."]\n";
# 		}
	}
	
	return(0);
}

# =head3
# 
# Private Functions;
# 
# =cut

#############################################################################################################
# Private functions                                                                                         #
#############################################################################################################
