import React from 'react';
import { useNavigate } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import { useActiveConnections, useGetConnections } from '../../../hooks-action/connection';
import { NavBar } from './nav-bar';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));
jest.mock('../../../hooks-action/connection', () => ({
  useActiveConnections: jest.fn(),
  useGetConnections: jest.fn(),
  useFetchPendingConnections: jest.fn(),
}));

(useGetConnections as jest.Mock).mockImplementation(() => () => {});

describe('<NavBar />', () => {
  it('renders properly.', () => {
    render(<NavBar />);

    expect(screen.getByTestId('nav-bar')).toBeInTheDocument();
  });

  it('renders dashboard option properly.', () => {
    render(<NavBar />);

    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });

  it('navigates to home page when clicked.', () => {
    const mockNavigate = jest.fn();

    (useNavigate as jest.Mock).mockImplementation(() => mockNavigate);

    render(<NavBar />);

    fireEvent.click(screen.getByTestId('nav-item'));

    expect(mockNavigate).toBeCalledTimes(1);
    expect(mockNavigate).toBeCalledWith('home');
  });
});
