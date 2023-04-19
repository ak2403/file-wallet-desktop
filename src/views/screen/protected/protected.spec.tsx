import React from 'react';
import { render } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';

import { ProtectedComponent } from './protected';

import { useConnectionEstablished } from '../../../hooks-action/users';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

jest.mock('../../../hooks-action/users', () => ({
  useConnectionEstablished: jest.fn(),
}));

(useNavigate as jest.Mock).mockImplementation(() => {});

(useConnectionEstablished as jest.Mock).mockReturnValue(false);

describe('<ProtectedComponent />', () => {
  it('renders properly', () => {
    const mockNavigate = jest.fn();

    (useNavigate as jest.Mock).mockImplementation(() => mockNavigate);

    render(<ProtectedComponent />);

    expect(mockNavigate).toBeCalledTimes(1);
    expect(mockNavigate).toBeCalledWith('/');
  });
});
