import React from 'react';
import { v4 as uuid } from 'uuid';

import { FolderViewLayout } from './folder-view.styles';

import { useFolders } from '../../../hooks-action/folder-structure';
import { Folder } from './folder';
import { File } from './file';

export const FolderView: React.FC = () => {
  const folders = useFolders();

  if (!folders.length) {
    return null;
  }

  console.log('folders : ', folders);

  return (
    <FolderViewLayout>
      {folders.map(({ name, ext, id }) => {
        if (ext === 'folder') {
          return <Folder key={uuid()} id={id} name={name} />;
        }
        return <File key={uuid()} id={id} name={name} />;
      })}
    </FolderViewLayout>
  );
};
