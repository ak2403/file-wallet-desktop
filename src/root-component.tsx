import { NetworkIndicator } from './components/network-indicator';
import { ThemeContext } from './context/theme';
import { Navigation } from './navigation';
import { Wrapper } from './root-component.styles';

const RootComponent = () => {
  return (
    <ThemeContext.Provider value="light">
      <Wrapper>
        <Navigation />
        <NetworkIndicator />
      </Wrapper>
    </ThemeContext.Provider>
  );
};

export { RootComponent };
