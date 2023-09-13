type ContainedButtonBackground = 'blue' | 'normal' | 'red';

type ContainedButtonOptionalProps = {
  background?: ContainedButtonBackground;
};

type ContainedButtonProps = import('@mui/material').ButtonProps &
  ContainedButtonOptionalProps;
