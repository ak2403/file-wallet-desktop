import { v4 as uuid } from 'uuid';
import { Loader as RLoader } from 'rsuite';
import { Wrapper } from './loader.styles';

type LoaderProps = {
  message: string;
};

export const Loader: React.FC<LoaderProps> = ({ message }) => {
  return (
    <Wrapper>
      <RLoader key={uuid()} content={message} vertical />
    </Wrapper>
  );
};
