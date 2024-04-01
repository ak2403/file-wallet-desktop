import { NetworkIndicator } from './components/network-indicator';
import { Wrapper } from './root-component.styles';

const RootComponent = () => {
  return (
    <Wrapper>
      Hello
      <NetworkIndicator />
    </Wrapper>
  );
};

export { RootComponent };
