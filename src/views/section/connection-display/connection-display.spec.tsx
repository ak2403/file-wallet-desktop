import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { useDisconnectConnection } from '../../../hooks-action/connection/disconnect-connection';

import { ConnectionDisplay } from './connection-display';

jest.mock('../../../hooks-action/connection/disconnect-connection', () => ({
  useDisconnectConnection: jest.fn(),
}));

(useDisconnectConnection as jest.Mock).mockImplementation(() => {});

const defaultProps = {
  id: '12345',
  connectedBy: 'john doe',
  connectionCreated: 'march 24',
  name: 'my device',
};

describe('<ConnectionDisplay />', () => {
  it('renders properly.', () => {
    const { container } = render(<ConnectionDisplay {...defaultProps} />);

    expect(container).toHaveTextContent('my deviceconnected by john doe on march 24');
  });

  it('renders option icon properly.', () => {
    render(<ConnectionDisplay {...defaultProps} />);

    expect(screen.getByTestId('display-option-icon')).toBeInTheDocument();
  });

  it('renders option list when icon clicked.', () => {
    render(<ConnectionDisplay {...defaultProps} />);

    fireEvent.click(screen.getByTestId('display-option-icon'));

    expect(screen.getByText('Activity')).toBeInTheDocument();
    expect(screen.getByText('Disconnect')).toBeInTheDocument();
  });

  it('triggers disconnect call when disconnect clicked.', () => {
    const mockDisconnect = jest.fn();

    (useDisconnectConnection as jest.Mock).mockImplementation(() => mockDisconnect);

    render(<ConnectionDisplay {...defaultProps} />);

    fireEvent.click(screen.getByTestId('display-option-icon'));
    fireEvent.click(screen.getByTestId('disconnect'));

    expect(mockDisconnect).toBeCalledTimes(1);
    expect(mockDisconnect).toBeCalledWith('12345');
  });
});
