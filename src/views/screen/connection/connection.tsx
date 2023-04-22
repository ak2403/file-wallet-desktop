import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { FolderView } from '../../section/folder-view';
import { FolderStructureTypes } from '../../../types/reducer';

import { ConnectionLayout } from './connection.styles';
import { Options } from './options';
import { RenderConnection } from './render-connection';
import { requestTargetFolder } from '../../../utils/electron';

export const ConnectionComponent: React.FC = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const connectionId = state?.id;

  useEffect(() => {
    dispatch({
      type: FolderStructureTypes.UpdateConnectionId,
      connectionId,
    });

    requestTargetFolder(connectionId);
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
