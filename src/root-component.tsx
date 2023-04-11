import React, { useEffect, useState } from 'react';

import { Navigation } from './navigation';
import { useStartUp } from './hooks-action/common';

import { RootLayout } from './root-component.styles';

export const RootComponent: React.FC = () => {
  const startUp = useStartUp();
  const [isAppLoaded, setAppLoaded] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      await startUp();

      setAppLoaded(true);
    })();
  }, []);

  return <RootLayout>{!isAppLoaded ? 'Loading...' : <Navigation />}</RootLayout>;
};
