import React from 'react';

import { LoginAppHeader } from './login-header.styles';

type LoginHeaderProps = {
  text: string;
};

export const LoginHeader: React.FC<LoginHeaderProps> = (props) => {
  const { text } = props;

  return <LoginAppHeader>{text}</LoginAppHeader>;
};
