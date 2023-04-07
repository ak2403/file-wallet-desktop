import React from 'react';
import { StyledInput } from './input.styles';

type InputProps = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  value: string;
};

export const Input: React.FC<InputProps> = (props: InputProps) => {
  const { type = 'text', placeholder = '', onChange = () => {}, value } = props;

  return <StyledInput type={type} placeholder={placeholder} onChange={onChange} value={value} />;
};
