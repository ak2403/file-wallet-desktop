import React from 'react';
import { v4 as uuid } from 'uuid';
import { shallowEqual, useSelector } from 'react-redux';

import { FolderViewLayout } from './folder-view.styles';
import { Folder } from '../../../ui-components/folder';
import { SelectedPathType } from '../../../types/reducer';
import { useUpdateFolderStructure } from '../../../hooks-action/connection';

export const FolderView: React.FC = () => {
  const selectedPath = useSelector((state: any) => state.folderStructure.selectedPath, shallowEqual);
  const folders = useSelector((state: any) => state.folderStructure.folders, shallowEqual);

  const updateFolderStructure = useUpdateFolderStructure();

  const onClick = (data: SelectedPathType) => {
    updateFolderStructure([...selectedPath, data]);
  };

  if (!folders.length) {
    return null;
  }

  console.log('folders : ', folders);

  return (
    <FolderViewLayout>
      {folders.map(({ name, ext, id }) => (
        <Folder key={uuid()} name={name} type={ext} onClick={() => onClick({ id, name })} />
      ))}
    </FolderViewLayout>
  );
};
