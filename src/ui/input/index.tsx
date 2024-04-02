import { TextInput } from 'grommet';
import { Dispatch, SetStateAction } from 'react';

type InputType = {
  value: string;
  onChange: (value: string) => void;
};

export const Input: React.FC<InputType> = ({ value, onChange }) => {
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;

    onChange(value);
  };
  return <TextInput placeholder="type here" value={value} onChange={onInputChange} />;
};
