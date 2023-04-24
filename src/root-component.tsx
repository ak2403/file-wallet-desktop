import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Navigation } from './navigation';
import { useStartUp } from './hooks-action/common';
import { FolderStructureTypes } from './types/reducer';

import { RootLayout } from './root-component.styles';
import { useFetchPendingConnections } from './hooks-action/connection';

export const RootComponent: React.FC = () => {
  const startUp = useStartUp();
  const dispatch = useDispatch();
  const [isAppLoaded, setAppLoaded] = useState<boolean>(false);
  const fetchPendingConnections = useFetchPendingConnections();

  //@ts-ignore
  window.bridge.targetDataReceived((_: any, data: any) => {
    //TODO: The function here is triggered twice for which I cant find a reason why
    dispatch({
      type: FolderStructureTypes.UpdateFolders,
      folders: data,
    });
  });

  //@ts-ignore
  window.bridge.targetFileDataReceived((_: any, data: any) => {
    //TODO: The function here is triggered twice for which I cant find a reason why
    // dispatch({
    //   type: FolderStructureTypes.UpdateFolders,
    //   folders: data,
    // });
    console.log(data);
  });

  //@ts-ignore
  window.bridge.receivedTargetStatus((_: any, data: any) => {
    //TODO: The function here is triggered twice for which I cant find a reason why
    dispatch({
      type: FolderStructureTypes.UpdateConnectionStatus,
      connectionId: data.connectionId,
    });
  });

  useEffect(() => {
    startUp().then(() => setAppLoaded(true));

    //@ts-ignore
    window.electron.on('do-action-for-notification', (_: any, data: any) => {
      console.log('Notification : ', data);
      fetchPendingConnections();
    });

    return () => {
      //@ts-ignore
      window.electron.remove('do-action-for-notification');
    };
  }, [isAppLoaded]);

  return <RootLayout>{!isAppLoaded ? 'Loading...' : <Navigation />}</RootLayout>;
};
