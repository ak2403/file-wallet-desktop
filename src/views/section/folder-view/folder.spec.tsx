import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { Folder } from './folder';

import { useSelectedPath, useUpdateFolderStructure } from '../../../hooks-action/connection';

jest.mock('../../../hooks-action/connection', () => ({
  useSelectedPath: jest.fn(),
  useUpdateFolderStructure: jest.fn(),
}));

(useSelectedPath as jest.Mock).mockReturnValue([
  {
    name: 'default path',
  },
]);
(useUpdateFolderStructure as jest.Mock).mockImplementation(() => {});

describe('<Folder />', () => {
  it('renders folder properly', () => {
    render(<Folder id="mock_id" name="mock folder" />);

    expect(screen.getByTestId('folder')).toBeInTheDocument();
  });

  it('renders title in folder properly', () => {
    render(<Folder id="mock_id" name="mock folder" />);

    expect(screen.getByText('mock folder')).toBeInTheDocument();
  });

  it('renders icon in folder properly', () => {
    render(<Folder id="mock_id" name="mock folder" />);

    expect(
      screen.getByRole('img', {
        hidden: true,
      }),
    ).toBeInTheDocument();
  });

  it('triggers function when clicked', () => {
    const mockUpdateFolderStructure = jest.fn();

    (useUpdateFolderStructure as jest.Mock).mockImplementation(() => mockUpdateFolderStructure);

    render(<Folder id="mock_id" name="mock folder" />);

    fireEvent.click(screen.getByTestId('folder'));

    expect(mockUpdateFolderStructure).toBeCalledTimes(1);
    expect(mockUpdateFolderStructure).toBeCalledWith([
      {
        name: 'default path',
      },
      { name: 'mock folder', id: 'mock_id' },
    ]);
  });
});
