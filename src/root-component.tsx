import { useEffect } from 'react';
import { useRunStartup } from './hooks/useRunStartup';
import { useIsAppLoaded } from './hooks/useIsAppLoaded';
import { Loader } from './ui/loader';
import { Navigation } from './navigation';

const RootComponent = () => {
  const isAppLoaded = useIsAppLoaded();
  const runStartup = useRunStartup();

  useEffect(() => {
    runStartup();
  }, []);

  if (!isAppLoaded) {
    return <Loader message="Starting the application..." />;
  }

  return <Navigation />;
};

export { RootComponent };
