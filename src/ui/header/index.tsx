import { Heading } from 'grommet';

type HeaderType = {
  text: string;
};

export const Header: React.FC<HeaderType> = ({ text }) => {
  return <Heading margin="none">{text}</Heading>;
};
