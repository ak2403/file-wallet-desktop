import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { OfflineConnection } from './offline-connection';

import { useConnectionId } from '../../../hooks-action/common';
import { requestTargetFolder } from '../../../utils/electron';

jest.mock('../../../hooks-action/common', () => ({
  useConnectionId: jest.fn(),
}));
jest.mock('../../../utils/electron', () => ({
  requestTargetFolder: jest.fn(),
}));

(useConnectionId as jest.Mock).mockReturnValue('12345');

describe('<OfflineConnection />', () => {
  it('renders properly', () => {
    render(<OfflineConnection />);

    expect(
      screen.getByText(
        /The device is not online. Once the device is online, please re-connect by clicking the below button./,
      ),
    ).toBeInTheDocument();
  });

  it('renders offline image properly', () => {
    render(<OfflineConnection />);

    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('renders re-connect button properly', () => {
    render(<OfflineConnection />);

    expect(
      screen.getByRole('button', {
        name: /Re Connect/,
      }),
    ).toBeInTheDocument();
  });

  it('triggers function when re-connect button clicked', () => {
    const mockRequestTargetFolder = jest.fn();

    (requestTargetFolder as jest.Mock).mockImplementation(mockRequestTargetFolder);

    render(<OfflineConnection />);

    const reConnectButton = screen.getByRole('button', {
      name: /Re Connect/,
    });

    fireEvent.click(reConnectButton);

    expect(mockRequestTargetFolder).toBeCalledWith('12345');
    expect(mockRequestTargetFolder).toBeCalledTimes(1);
  });
});
