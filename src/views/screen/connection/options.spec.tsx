import React from 'react';
import { Options } from './options';

import { useUpdateFolderStructure, useSelectedPath } from '../../../hooks-action/connection';
import { fireEvent, render, screen } from '@testing-library/react';

jest.mock('../../../hooks-action/connection', () => ({
  useUpdateFolderStructure: jest.fn(),
  useSelectedPath: jest.fn(),
}));

(useUpdateFolderStructure as jest.Mock).mockImplementation(() => {});

(useSelectedPath as jest.Mock).mockReturnValue([]);

const mockedPath = [{ name: 'mock path1' }, { name: 'mock path2' }];

describe('<Options />', () => {
  it('renders home icon properly', () => {
    render(<Options />);

    expect(
      screen.getByRole('img', {
        hidden: true,
      }),
    ).toBeInTheDocument();
  });

  it('triggers function when home icon clicked', () => {
    const mockOnClick = jest.fn();

    (useUpdateFolderStructure as jest.Mock).mockImplementation(() => mockOnClick);

    render(<Options />);

    fireEvent.click(
      screen.getByRole('img', {
        hidden: true,
      }),
    );

    expect(mockOnClick).toBeCalledTimes(1);
    expect(mockOnClick).toBeCalledWith([]);
  });

  it('renders list of paths properly', () => {
    (useSelectedPath as jest.Mock).mockReturnValue(mockedPath);

    render(<Options />);

    expect(screen.getByText('mock path2')).toBeInTheDocument();
  });

  it('triggers function when path is clicked', () => {
    const mockOnClick = jest.fn();

    (useSelectedPath as jest.Mock).mockReturnValue(mockedPath);
    (useUpdateFolderStructure as jest.Mock).mockImplementation(() => mockOnClick);

    render(<Options />);

    fireEvent.click(screen.getByTestId('crumb-mock path1'));

    expect(mockOnClick).toBeCalledTimes(1);
    expect(mockOnClick).toBeCalledWith([{ name: 'mock path1' }]);
  });
});
