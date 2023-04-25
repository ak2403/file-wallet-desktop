import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { usePendingConnections, useFetchPendingConnections } from '../../../hooks-action/connection';

import { ConnectionRequest } from './connection-request';

jest.mock('../../../hooks-action/connection', () => ({
  useFetchPendingConnections: jest.fn(),
  usePendingConnections: jest.fn(),
  useApproveConnectionRequest: jest.fn(),
}));

(useFetchPendingConnections as jest.Mock).mockImplementation(() => () => {});
(usePendingConnections as jest.Mock).mockReturnValue([]);

describe('<ConnectionRequest />', () => {
  it('renders connection request icon properly.', () => {
    render(<ConnectionRequest />);

    expect(screen.getByTestId('connection-request-icon')).toBeInTheDocument();
  });

  it('calls pending connection fetch when component renders.', () => {
    const mockFetchConnection = jest.fn();

    (useFetchPendingConnections as jest.Mock).mockImplementation(() => mockFetchConnection);
    (usePendingConnections as jest.Mock).mockReturnValue([]);

    render(<ConnectionRequest />);

    expect(mockFetchConnection).toBeCalledTimes(1);
  });

  it('renders no pending connection message when pending connection empty.', () => {
    const mockFetchConnection = jest.fn();

    (useFetchPendingConnections as jest.Mock).mockImplementation(() => mockFetchConnection);
    (usePendingConnections as jest.Mock).mockReturnValue([]);

    render(<ConnectionRequest />);

    fireEvent.click(screen.getByTestId('connection-request-icon'));

    expect(screen.getByText(/There isn't no pending connection./)).toBeInTheDocument();
  });

  it('renders pending connections properly when button clicked.', () => {
    const mockFetchConnection = jest.fn();

    (useFetchPendingConnections as jest.Mock).mockImplementation(() => mockFetchConnection);
    (usePendingConnections as jest.Mock).mockReturnValue([
      {
        id: 'mock id',
        requestedBy: 'mock requested',
        fromDevice: 'mock device',
      },
    ]);

    render(<ConnectionRequest />);

    fireEvent.click(screen.getByTestId('connection-request-icon'));

    expect(screen.getByText('mock requested has requested access from mock device')).toBeInTheDocument();
  });
});
