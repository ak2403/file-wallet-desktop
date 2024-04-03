import { Button as GButton } from 'grommet';

type ButtonType = {
  label: string;
  onClick: () => void;
};

export const Button: React.FC<ButtonType> = ({ label, onClick }) => {
  return <GButton primary color={'#b2dfa8'} label={label} onClick={onClick} />;
};
