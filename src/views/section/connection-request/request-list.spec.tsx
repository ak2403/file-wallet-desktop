import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { RequestList } from './request-list';

import { useApproveConnectionRequest } from '../../../hooks-action/connection';

jest.mock('../../../hooks-action/connection', () => ({
  useApproveConnectionRequest: jest.fn(),
}));
(useApproveConnectionRequest as jest.Mock).mockImplementation(() => {});

const defaultProps = {
  requestedBy: 'mock request',
  fromDevice: 'mock device',
  id: 'mock id',
};

describe('<RequestList />', () => {
  it('renders request list properly.', () => {
    render(<RequestList {...defaultProps} />);

    expect(screen.getByText('mock request has requested access from mock device')).toBeInTheDocument();
  });

  describe('approve icon', () => {
    it('renders approve icon for request list properly.', () => {
      render(<RequestList {...defaultProps} />);

      expect(screen.getByTestId('request-approve-icon')).toBeInTheDocument();
    });

    it('triggers onClick when approve icon clicked.', () => {
      const mockApproveConnection = jest.fn();
      (useApproveConnectionRequest as jest.Mock).mockImplementation(() => mockApproveConnection);

      render(<RequestList {...defaultProps} />);

      fireEvent.click(screen.getByTestId('request-approve-icon'));

      expect(mockApproveConnection).toBeCalledTimes(1);
      expect(mockApproveConnection).toBeCalledWith('mock id', true);
    });
  });

  describe('decline icon', () => {
    it('renders decline icon for request list properly.', () => {
      render(<RequestList {...defaultProps} />);

      expect(screen.getByTestId('request-decline-icon')).toBeInTheDocument();
    });

    it('triggers onClick when decline icon clicked.', () => {
      const mockApproveConnection = jest.fn();
      (useApproveConnectionRequest as jest.Mock).mockImplementation(() => mockApproveConnection);

      render(<RequestList {...defaultProps} />);

      fireEvent.click(screen.getByTestId('request-decline-icon'));

      expect(mockApproveConnection).toBeCalledTimes(1);
      expect(mockApproveConnection).toBeCalledWith('mock id', false);
    });
  });
});
