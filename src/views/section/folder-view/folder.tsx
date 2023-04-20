import React from 'react';

import { faFolder } from '@fortawesome/free-solid-svg-icons';

import { useSelectedPath, useUpdateFolderStructure } from '../../../hooks-action/connection';

import { FolderLayout, FolderText, ViewIcon } from './folder.styles';
import { useBlockInteraction } from '../../../hooks-action/folder-structure';

type FolderType = {
  id: string;
  name: string;
};

export const Folder: React.FC<FolderType> = (props) => {
  const { name, id } = props;
  const blockInteraction = useBlockInteraction();
  const selectedPath = useSelectedPath();
  const updateFolderStructure = useUpdateFolderStructure();

  const onClick = () => {
    if (blockInteraction) {
      return;
    }

    updateFolderStructure([...selectedPath, { name, id }]);
  };

  return (
    <FolderLayout data-testid="folder" onClick={onClick}>
      <ViewIcon icon={faFolder} />
      <FolderText>{name}</FolderText>
    </FolderLayout>
  );
};
