import React from 'react';

import { HeaderText } from './header.styles';

type HeaderProps = {
  text: string;
};

export const Header: React.FC<HeaderProps> = (props) => {
  const { text } = props;

  return <HeaderText>{text}</HeaderText>;
};
