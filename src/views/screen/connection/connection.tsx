import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { FolderView } from '../../section/folder-view';
import { ConnectionLayout } from './connection.styles';

export const ConnectionComponent: React.FC = (props) => {
  const { state } = useLocation();
  const [folderStructure, setFolderStructure] = useState([]);

  const connectionId = state?.id;

  //@ts-ignore
  window.bridge.targetDataReceived(async (_: any, data: any) => {
    setFolderStructure(data);
  });

  useEffect(() => {
    //@ts-ignore
    window.electron.send('access-target-folder', { connectionId, path: '' });
  }, []);

  const folderClick = (path: any) => {
    //@ts-ignore
    window.electron.send('access-target-folder', { connectionId, path });
  };

  return (
    <ConnectionLayout>
      Connection
      <FolderView connectionId={connectionId} folders={folderStructure} onFolderClick={folderClick} />
    </ConnectionLayout>
  );
};
