import { useEffect } from 'react';
import { useRunStartup } from './hooks/useRunStartup';
import { useIsAppLoaded } from './hooks/useIsAppLoaded';

const RootComponent = () => {
  const isAppLoaded = useIsAppLoaded();
  const runStartup = useRunStartup();

  useEffect(() => {
    runStartup();
  }, []);

  if (!isAppLoaded) {
    return <>Loading...</>;
  }

  return <div>Hello</div>;
};

export { RootComponent };
