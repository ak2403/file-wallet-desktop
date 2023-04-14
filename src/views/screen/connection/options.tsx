import React from 'react';

import { BreadCrumb } from '../../../ui-components/breadcrumb';
import { FolderStructure } from '../../../types/data';
import { useSelector } from 'react-redux';
import { useUpdateFolderStructure } from '../../../hooks-action/connection';

export const Options: React.FC = () => {
  const { selectedPath = [] } = useSelector((state: any) => state.folderStructure);
  const updateFolderStructure = useUpdateFolderStructure();
  console.log('Options -------');
  const folderClick = (data: FolderStructure) => {
    const { id, name } = data;

    if (name === 'home') {
      updateFolderStructure([]);
    }

    const findIndex = selectedPath.findIndex(({ id: pathId }) => pathId === id);

    const filterPath = selectedPath.slice(0, findIndex + 1);

    updateFolderStructure(filterPath);
  };

  return (
    <>
      <BreadCrumb path={selectedPath} onClick={folderClick} />
    </>
  );
};
