import React from 'react';
import { StyledInput } from './input.styles';

type InputProps = {
  type?: string;
  placeholder?: string;
  onChange?: () => void;
};

export const Input: React.FC<InputProps> = (props: InputProps) => {
  const { type = 'text', placeholder = '', onChange = () => {} } = props;

  return <StyledInput type={type} placeholder={placeholder} onChange={onChange} />;
};
