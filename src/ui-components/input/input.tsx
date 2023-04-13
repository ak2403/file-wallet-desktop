import React from 'react';
import { StyledInput } from './input.styles';

type InputProps = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  value: string;
  disabled?: boolean;
};

export const Input: React.FC<InputProps> = (props: InputProps) => {
  const { type = 'text', placeholder = '', onChange = () => {}, value, disabled } = props;

  return <StyledInput type={type} placeholder={placeholder} onChange={onChange} value={value} disabled={disabled} />;
};
