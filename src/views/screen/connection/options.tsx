import React from 'react';

import { BreadCrumb } from '../../../ui-components/breadcrumb';

import { useUpdateFolderStructure, useSelectedPath } from '../../../hooks-action/connection';

import { FolderStructure } from '../../../types/data';
import { OptionLayout, LeftLayout, RightLayout } from './options.styles';

export const Options: React.FC = () => {
  const selectedPath = useSelectedPath();
  const updateFolderStructure = useUpdateFolderStructure();

  const folderClick = (data?: FolderStructure) => {
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
    <OptionLayout>
      <LeftLayout>
        <BreadCrumb path={selectedPath} onClick={folderClick} />
      </LeftLayout>

      <RightLayout></RightLayout>
    </OptionLayout>
  );
};
