import React from 'react';
import { v4 as uuid } from 'uuid';

import { FolderViewLayout, Wait } from './folder-view.styles';

import { useBlockInteraction, useFolders } from '../../../hooks-action/folder-structure';
import { Folder } from './folder';
import { File } from './file';

export const FolderView: React.FC = () => {
  const folders = useFolders();
  const blockInteraction = useBlockInteraction();

  if (!folders.length) {
    return null;
  }

  return (
    <FolderViewLayout data-testid="folder-view">
      {folders.map(({ name, ext, id, size }) => {
        if (ext === 'folder') {
          return <Folder key={uuid()} id={id} name={name} />;
        }
        return <File key={uuid()} id={id} name={name} type={ext} size={size} />;
      })}

      {blockInteraction ? <Wait></Wait> : null}
    </FolderViewLayout>
  );
};
