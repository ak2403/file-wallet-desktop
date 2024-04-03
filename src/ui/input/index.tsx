import { TextInput } from 'grommet';

type InputType = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export const Input: React.FC<InputType> = ({ value, onChange, placeholder }) => {
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;

    onChange(value);
  };
  return <TextInput placeholder={placeholder} value={value} onChange={onInputChange} />;
};
