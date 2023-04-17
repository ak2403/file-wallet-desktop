import React from 'react';

import { BreadCrumb } from '../../../ui-components/breadcrumb';

import { useUpdateFolderStructure } from '../../../hooks-action/connection';
import { useSelectedPath } from '../../../hooks-action/connection/selected-path';

import { FolderStructure } from '../../../types/data';

export const Options: React.FC = () => {
  const selectedPath = useSelectedPath();
  const updateFolderStructure = useUpdateFolderStructure();

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
