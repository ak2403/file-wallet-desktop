import React from 'react';
import { StyledButton } from './button.styles';

type ButtonProps = {
  label?: string;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { label = '', onClick = () => {} } = props;

  return <StyledButton onClick={onClick}>{label}</StyledButton>;
};
