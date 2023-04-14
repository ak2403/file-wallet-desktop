import React from 'react';
import { v4 as uuid } from 'uuid';
import { useSelector } from 'react-redux';

import { FolderStructure } from '../../../types/data';
import { FolderViewLayout } from './folder-view.styles';
import { Folder } from '../../../ui-components/folder';
import { SelectedPathType } from '../../../types/reducer';
import { useUpdateFolderStructure } from '../../../hooks-action/connection';

type FolderViewType = {
  folders: FolderStructure[];
  connectionId: string;
};

export const FolderView: React.FC<FolderViewType> = (props) => {
  const { selectedPath = [] } = useSelector((state: any) => state.folderStructure);
  const updateFolderStructure = useUpdateFolderStructure();

  console.log('FolderView -------');

  const { folders } = props;

  const onClick = (data: SelectedPathType) => {
    updateFolderStructure([...selectedPath, data]);
  };

  return (
    <FolderViewLayout>
      {folders.map(({ name, ext, id }) => (
        <Folder key={uuid()} name={name} type={ext} onClick={() => onClick({ id, name })} />
      ))}
    </FolderViewLayout>
  );
};
