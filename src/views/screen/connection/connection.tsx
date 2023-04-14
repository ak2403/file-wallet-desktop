import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { FolderView } from '../../section/folder-view';
import { ConnectionLayout } from './connection.styles';
import { BreadCrumb } from '../../../ui-components/breadcrumb';

export const ConnectionComponent: React.FC = () => {
  const { state } = useLocation();
  const [folderStructure, setFolderStructure] = useState([]);
  const [selectedPath, updateSelectedPath] = useState<string[]>([]);

  const connectionId = state?.id;

  //@ts-ignore
  window.bridge.targetDataReceived(async (_: any, data: any) => {
    setFolderStructure(data);
  });

  useEffect(() => {
    //@ts-ignore
    window.electron.send('access-target-folder', { connectionId, path: '' });
  }, []);

  const folderClick = (path: string) => {
    const updatedPath = [...selectedPath, path];

    updateSelectedPath([...updatedPath]);

    //@ts-ignore
    window.electron.send('access-target-folder', { connectionId, path: updatedPath.join('/') });
  };

  return (
    <ConnectionLayout>
      Connection
      <BreadCrumb path={selectedPath} />
      <FolderView connectionId={connectionId} folders={folderStructure} onFolderClick={folderClick} />
    </ConnectionLayout>
  );
};
