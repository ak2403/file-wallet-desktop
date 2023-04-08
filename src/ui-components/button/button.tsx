import React from 'react';
import { StyledButton } from './button.styles';

type ButtonProps = {
  children: React.ReactNode;
  label?: string;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { children = '', onClick = () => {} } = props;

  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};
