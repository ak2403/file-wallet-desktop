import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { FolderView } from '../../section/folder-view';
import { FolderStructureTypes } from '../../../types/reducer';

import { ConnectionLayout } from './connection.styles';
import { Options } from './options';
import { RenderConnection } from './render-connection';

export const ConnectionComponent: React.FC = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const connectionId = state?.id;

  useEffect(() => {
    dispatch({
      type: FolderStructureTypes.UpdateConnectionId,
      connectionId,
    });

    //@ts-ignore
    window.electron.send('access-target-folder', { connectionId, filePath: '', requestType: 'read' });
  }, []);

  return (
    <ConnectionLayout>
      <RenderConnection>
        <Options />
        <FolderView />
      </RenderConnection>
    </ConnectionLayout>
  );
};
