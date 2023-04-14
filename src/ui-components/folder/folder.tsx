import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFolder, faFile, faFilePdf, faCode } from '@fortawesome/free-solid-svg-icons';

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
    case '.pdf':
      icon = faFilePdf;
    case '.html':
    case '.css':
    case '.py':
    case '.js':
      icon = faCode;
    default:
      icon = faFile;
  }

  return (
    <FolderLayout onClick={onClick}>
      <FontAwesomeIcon icon={icon} fontSize="38px" />
      {name}
    </FolderLayout>
  );
};
