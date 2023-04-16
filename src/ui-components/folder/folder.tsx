import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFolder, faFile, faFilePdf, faCode, faFileImage, faFileZipper } from '@fortawesome/free-solid-svg-icons';

import { faFileWord } from '@fortawesome/free-regular-svg-icons';

import { FolderLayout, FolderText } from './folder.styles';
import { Colors } from '../../config/colors';

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
      break;
    case '.html':
    case '.css':
    case '.py':
    case '.js':
      icon = faCode;
      break;
    case '.png':
    case '.jpg':
      icon = faFileImage;
      break;
    case '.docx':
    case '.doc':
      icon = faFileWord;
      break;
    case '.zip':
    case '.zipx':
    case '.gz':
    case '.tar':
    case '.z':
      icon = faFileZipper;
      break;
    default:
      icon = faFile;
  }

  return (
    <FolderLayout onClick={onClick}>
      <FontAwesomeIcon icon={icon} color={Colors.appBlack} fontSize="38px" />
      <FolderText>{name}</FolderText>
    </FolderLayout>
  );
};
