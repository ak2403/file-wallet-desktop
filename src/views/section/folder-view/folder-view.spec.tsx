import React from 'react';
import { render, screen } from '@testing-library/react';

import { FolderView } from './folder-view';

import { useSelectedPath } from '../../../hooks-action/connection';
import { useConnectionId } from '../../../hooks-action/common';
import { useFolders } from '../../../hooks-action/folder-structure';

jest.mock('../../../hooks-action/connection', () => ({
  useSelectedPath: jest.fn(),
  useUpdateFolderStructure: jest.fn(),
}));
jest.mock('../../../hooks-action/common', () => ({
  useConnectionId: jest.fn(),
}));
jest.mock('../../../hooks-action/folder-structure', () => ({
  useFolders: jest.fn(),
  useBlockInteraction: jest.fn(),
}));
jest.mock('../../../utils/open-dialog', () => ({
  openDialogWindow: jest.fn(),
}));

(useSelectedPath as jest.Mock).mockReturnValue([
  {
    name: 'default path',
  },
]);
(useConnectionId as jest.Mock).mockReturnValue('12345');
(useFolders as jest.Mock).mockReturnValue([
  {
    name: 'mock folder',
    ext: 'folder',
  },
]);

describe('<FolderView />', () => {
  it('renders folder properly', () => {
    render(<FolderView />);

    expect(screen.getByTestId('folder')).toBeInTheDocument();
  });

  it('renders file properly', () => {
    (useFolders as jest.Mock).mockReturnValue([
      {
        name: 'mock file',
        ext: 'file',
      },
    ]);

    render(<FolderView />);

    expect(screen.getByTestId('file')).toBeInTheDocument();
  });

  it('should not render when no folders present', () => {
    (useFolders as jest.Mock).mockReturnValue([]);

    render(<FolderView />);

    expect(screen.queryByTestId('folder-view')).not.toBeInTheDocument();
  });
});
