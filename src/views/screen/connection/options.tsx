import React from 'react';

import { BreadCrumb } from '../../../ui-components/breadcrumb';

import { useUpdateFolderStructure, useSelectedPath } from '../../../hooks-action/connection';

import { FolderStructure } from '../../../types/data';

export const Options: React.FC = () => {
  const selectedPath = useSelectedPath();
  const updateFolderStructure = useUpdateFolderStructure();

  const folderClick = (data: FolderStructure) => {
    if (!data) {
      updateFolderStructure([]);

      return;
    }

    const { id } = data;

    const findIndex = selectedPath.findIndex(({ id: pathId }) => pathId === id);

    if (findIndex === -1) {
      return;
    }

    const filterPath = selectedPath.slice(0, findIndex + 1);

    updateFolderStructure(filterPath);
  };

  return (
    <>
      <BreadCrumb path={selectedPath} onClick={folderClick} />
    </>
  );
};
