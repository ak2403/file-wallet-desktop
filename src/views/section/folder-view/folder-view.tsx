import React from 'react';
import { FolderStructure } from '../../../types/data';
import { FolderViewLayout } from './folder-view.styles';
import { Folder } from '../../../ui-components/folder';

type FolderViewType = {
  folders: FolderStructure[];
  connectionId: string;
  onFolderClick: (path: any) => void;
};

export const FolderView: React.FC<FolderViewType> = (props) => {
  const { folders, onFolderClick } = props;

  return (
    <FolderViewLayout>
      {folders.map(({ name, type }) => (
        <Folder name={name} type={type} onClick={() => onFolderClick(name)} />
      ))}
    </FolderViewLayout>
  );
};
