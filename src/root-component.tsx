import React, { useEffect, useState } from 'react';
import { Navigation } from './navigation';

import { RootLayout } from './root-component.styles';
import { useStartUp } from './hooks-action/common';

export const RootComponent: React.FC = () => {
  const startUp = useStartUp();
  const [isAppLoaded, setAppLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      await startUp();

      setAppLoaded(true);
    })();
  }, []);

  return <RootLayout>{!isAppLoaded ? 'Loading...' : <Navigation />}</RootLayout>;
};
