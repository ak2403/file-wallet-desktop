import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { File } from './file';

import { useSelectedPath } from '../../../hooks-action/connection';
import { useConnectionId } from '../../../hooks-action/common';
import { useBlockInteraction } from '../../../hooks-action/folder-structure';
import { openDialogWindow } from '../../../utils/open-dialog';

jest.mock('../../../hooks-action/connection', () => ({
  useSelectedPath: jest.fn(),
}));
jest.mock('../../../hooks-action/common', () => ({
  useConnectionId: jest.fn(),
}));
jest.mock('../../../hooks-action/folder-structure', () => ({
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

const mockDialogWindow = jest.fn().mockReturnValue({ canceled: undefined });
(openDialogWindow as jest.Mock).mockImplementation(mockDialogWindow);
(useBlockInteraction as jest.Mock).mockReturnValue(false);

describe('<File />', () => {
  afterAll(() => jest.restoreAllMocks());

  it('renders properly', () => {
    render(<File type=".pdf" name="mock file" />);

    expect(screen.getByText('mock file')).toBeInTheDocument();
    expect(
      screen.getByRole('img', {
        hidden: true,
      }),
    ).toBeInTheDocument();
  });

  it('triggers dialog window when clicked', () => {
    const mockDialogWindow = jest.fn().mockReturnValue({ canceled: undefined });

    (openDialogWindow as jest.Mock).mockImplementation(mockDialogWindow);

    render(<File type=".pdf" name="mock file" />);

    fireEvent.click(screen.getByTestId('file'));

    expect(mockDialogWindow).toBeCalledTimes(1);
  });

  it('should not trigger electron listener when canceled', () => {
    const mockSend = jest.fn();

    Object.defineProperty(window, 'electron', {
      configurable: true,
      value: {
        send: mockSend,
      },
    });

    const mockDialogWindow = jest.fn().mockReturnValue({ canceled: true });
    (openDialogWindow as jest.Mock).mockImplementation(mockDialogWindow);

    render(<File type=".pdf" name="mock file" />);

    fireEvent.click(screen.getByTestId('file'));

    expect(mockDialogWindow).toBeCalledTimes(1);
    expect(mockSend).toBeCalledTimes(0);
  });

  it('should not trigger electron listener when filePath undefined', () => {
    const mockSend = jest.fn();

    Object.defineProperty(window, 'electron', {
      value: {
        send: mockSend,
      },
    });

    const mockDialogWindow = jest.fn().mockReturnValue({ canceled: false });
    (openDialogWindow as jest.Mock).mockImplementation(mockDialogWindow);

    render(<File type=".pdf" name="mock file" />);

    fireEvent.click(screen.getByTestId('file'));

    expect(mockDialogWindow).toBeCalledTimes(1);
    expect(mockSend).toBeCalledTimes(0);
  });

  it.todo('trigger electron listener when clicked with props');
});
