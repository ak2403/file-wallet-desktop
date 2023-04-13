import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFolder, faFile } from '@fortawesome/free-solid-svg-icons';

import { FolderLayout } from './folder.styles';

type FolderType = {
  name: string;
  type: string;
  onClick: () => void;
};

export const Folder: React.FC<FolderType> = (props) => {
  const { name, type, onClick } = props;

  let icon;

  switch (type) {
    case 'folder':
      icon = faFolder;
      break;
    default:
      icon = faFile;
  }

  return (
    <FolderLayout onClick={onClick}>
      <FontAwesomeIcon icon={icon} fontSize="42px" />
      {name}
    </FolderLayout>
  );
};
