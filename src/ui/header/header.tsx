import { Heading } from './header.styles';

type HeaderType = {
  text: string;
};

export const Header: React.FC<HeaderType> = ({ text }) => {
  return <Heading>{text}</Heading>;
};
