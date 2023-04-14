import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { FolderView } from '../../section/folder-view';
import { FolderStructureTypes } from '../../../types/reducer';

import { ConnectionLayout } from './connection.styles';
import { Options } from './options';

export const ConnectionComponent: React.FC = () => {
  const { state } = useLocation();
  const [folderStructure, setFolderStructure] = useState([]);
  const dispatch = useDispatch();

  const connectionId = state?.id;

  //@ts-ignore
  window.bridge.targetDataReceived(async (_: any, data: any) => {
    console.log('targetDataReceived : ', data);
    setFolderStructure(data);
  });

  useEffect(() => {
    dispatch({
      type: FolderStructureTypes.UpdateConnectionId,
      connectionId,
    });

    //@ts-ignore
    window.electron.send('access-target-folder', { connectionId, path: '' });
  }, []);

  return (
    <ConnectionLayout>
      Connection
      <Options />
      <FolderView connectionId={connectionId} folders={folderStructure} />
    </ConnectionLayout>
  );
};
