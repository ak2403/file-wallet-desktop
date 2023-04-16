import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Navigation } from './navigation';
import { useStartUp } from './hooks-action/common';
import { FolderStructureTypes } from './types/reducer';

import { RootLayout } from './root-component.styles';

export const RootComponent: React.FC = () => {
  const startUp = useStartUp();
  const dispatch = useDispatch();
  const [isAppLoaded, setAppLoaded] = useState<boolean>(false);

  //@ts-ignore
  window.bridge.targetDataReceived((_: any, data: any) => {
    //TODO: The function here is triggered twice for which I cant find a reason why
    dispatch({
      type: FolderStructureTypes.UpdateFolders,
      folders: data,
    });
  });

  useEffect(() => {
    (async () => {
      await startUp();

      setAppLoaded(true);
    })();
  }, []);

  return <RootLayout>{!isAppLoaded ? 'Loading...' : <Navigation />}</RootLayout>;
};
