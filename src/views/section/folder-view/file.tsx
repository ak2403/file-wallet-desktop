import React from 'react';

import { faFile, faFilePdf, faCode, faFileImage, faFileZipper } from '@fortawesome/free-solid-svg-icons';
import { faFileWord } from '@fortawesome/free-regular-svg-icons';

import { useSelectedPath } from '../../../hooks-action/connection';
import { useConnectionId } from '../../../hooks-action/common';
import { openDialogWindow } from '../../../utils/open-dialog';

import { FolderLayout, FolderText, ViewIcon } from './folder.styles';

type FileType = {
  id?: string;
  name: string;
  type: string;
};

export const File: React.FC<FileType> = (props) => {
  const { name, type } = props;
  const connectionId = useConnectionId();
  const selectedPath = useSelectedPath();

  const icon = (() => {
    switch (type) {
      case '.pdf':
        return faFilePdf;

      case '.html':
      case '.css':
      case '.py':
      case '.js':
        return faCode;

      case '.png':
      case '.jpg':
        return faFileImage;

      case '.docx':
      case '.doc':
        return faFileWord;

      case '.zip':
      case '.zipx':
      case '.gz':
      case '.tar':
      case '.z':
        return faFileZipper;

      default:
        return faFile;
    }
  })();

  const onClick = async () => {
    const { canceled, filePath: targetFilePath } = await openDialogWindow();

    if (canceled || !targetFilePath) {
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
    <FolderLayout data-testid="file" onClick={onClick}>
      <ViewIcon icon={icon} />
      <FolderText>{name}</FolderText>
    </FolderLayout>
  );
};
