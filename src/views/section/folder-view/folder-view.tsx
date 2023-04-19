import React from 'react';
import { v4 as uuid } from 'uuid';
import { shallowEqual, useSelector } from 'react-redux';

import { FolderViewLayout } from './folder-view.styles';
import { Folder } from '../../../ui-components/folder';
import { SelectedPathType } from '../../../types/reducer';
import { useUpdateFolderStructure } from '../../../hooks-action/connection';
import { useConnectionId } from '../../../hooks-action/common';

export const FolderView: React.FC = () => {
  const connectionId = useConnectionId();
  const selectedPath = useSelector((state: any) => state.folderStructure.selectedPath, shallowEqual);
  const folders = useSelector((state: any) => state.folderStructure.folders, shallowEqual);

  const updateFolderStructure = useUpdateFolderStructure();

  const onFolderClick = (data: SelectedPathType) => {
    updateFolderStructure([...selectedPath, data]);
  };

  const onFileClick = (data: SelectedPathType) => {
    // @ts-ignore
    window.bridge
      .dialog('showOpenDialog', {
        title: 'Select destination folder',
        buttonLabel: 'select path',
        properties: ['openDirectory'],
      })
      .then((response: any) => {
        const newPath = [...selectedPath, data.name];

        // @ts-ignore
        window.electron.send('access-target-folder', {
          connectionId,
          path: newPath.join('/'),
          targetPath: response.filePaths[0],
          requestType: 'download',
        });
      });
  };

  if (!folders.length) {
    return null;
  }

  console.log('folders : ', folders);

  return (
    <FolderViewLayout>
      {folders.map(({ name, ext, id }) => (
        <Folder
          key={uuid()}
          name={name}
          type={ext}
          onClick={() => {
            if (ext === 'folder') {
              onFolderClick({ id, name });
            } else {
              onFileClick({ id, name });
            }
          }}
        />
      ))}
    </FolderViewLayout>
  );
};
