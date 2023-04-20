import React from 'react';

import { faFolder } from '@fortawesome/free-solid-svg-icons';

import { useSelectedPath } from '../../../hooks-action/connection';
import { useConnectionId } from '../../../hooks-action/common';
import { openDialogWindow } from '../../../utils/open-dialog';

import { FolderLayout, FolderText, ViewIcon } from './folder.styles';

type FileType = {
  name: string;
  id: string;
};

export const File: React.FC<FileType> = (props) => {
  const { name } = props;
  const connectionId = useConnectionId();
  const selectedPath = useSelectedPath();

  const onClick = async () => {
    const { canceled, filePath: targetFilePath } = await openDialogWindow();

    if (canceled) {
      return;
    }

    const pathNames = selectedPath.map(({ name }) => name);
    const newPath = [...pathNames, name];

    // @ts-ignore
    window.electron.send('access-target-folder', {
      connectionId,
      transferFilePath: newPath.join('/'),
      targetFileName: name,
      targetFilePath,
      requestType: 'download',
    });
  };

  return (
    <FolderLayout onClick={onClick}>
      <ViewIcon icon={faFolder} />
      <FolderText>{name}</FolderText>
    </FolderLayout>
  );
};
