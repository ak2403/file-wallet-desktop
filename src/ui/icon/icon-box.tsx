import { Wrapper } from './icon-box.styles';

type IconBoxProps = {
  icon: React.ReactNode;
};

export const IconBox: React.FC<IconBoxProps> = ({ icon }) => {
  return <Wrapper>{icon}</Wrapper>;
};
