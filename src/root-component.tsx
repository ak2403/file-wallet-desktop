import { useEffect } from 'react';
import { useRunStartup } from './hooks/useRunStartup';
import { useIsAppLoaded } from './hooks/useIsAppLoaded';
import { StartupLoader } from './ui/loader';

const RootComponent = () => {
  const isAppLoaded = useIsAppLoaded();
  const runStartup = useRunStartup();

  useEffect(() => {
    runStartup();
  }, []);

  if (!isAppLoaded) {
    return <StartupLoader />;
  }

  return <div>Hello</div>;
};

export { RootComponent };
