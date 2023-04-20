import React from 'react';

import { faFolder } from '@fortawesome/free-solid-svg-icons';

import { useSelectedPath, useUpdateFolderStructure } from '../../../hooks-action/connection';

import { FolderLayout, FolderText, ViewIcon } from './folder.styles';

type FolderType = {
  name: string;
  id: string;
};

export const Folder: React.FC<FolderType> = (props) => {
  const { name, id } = props;
  const selectedPath = useSelectedPath();
  const updateFolderStructure = useUpdateFolderStructure();

  const onClick = () => {
    updateFolderStructure([...selectedPath, { name, id }]);
  };

  return (
    <FolderLayout onClick={onClick}>
      <ViewIcon icon={faFolder} />
      <FolderText>{name}</FolderText>
    </FolderLayout>
  );
};
