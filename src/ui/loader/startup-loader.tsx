import { v4 as uuid } from 'uuid';
import { Loader } from 'rsuite';
import { Wrapper } from './loader.styles';

export const StartupLoader = () => {
  return (
    <Wrapper>
      <Loader key={uuid()} content="Starting the application..." vertical />
    </Wrapper>
  );
};
