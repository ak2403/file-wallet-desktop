import React from 'react';
import { StyledButton } from './button.styles';
import { Loading } from '../loading';

type ButtonProps = {
  children: React.ReactNode;
  label?: string;
  onClick?: () => void;
  loading?: boolean;
};

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { children = '', onClick = () => {}, loading } = props;

  return (
    <StyledButton disabled={loading} onClick={onClick}>
      {loading ? <Loading /> : children}
    </StyledButton>
  );
};
