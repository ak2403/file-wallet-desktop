import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { faAdd } from '@fortawesome/free-solid-svg-icons';

import { NavItem } from './nav-item';

const defaultProps = {
  icon: faAdd,
  label: 'mock label',
  onClick: () => {},
};

describe('NavItem', () => {
  it('renders label properly', () => {
    render(<NavItem {...defaultProps} />);

    expect(screen.getByText('mock label')).toBeInTheDocument();
  });

  it('triggers onClick when clicked', () => {
    const mockOnClick = jest.fn();

    const props = {
      ...defaultProps,
      onClick: mockOnClick,
    };

    render(<NavItem {...props} />);

    fireEvent.click(screen.getByTestId('nav-item'));

    expect(mockOnClick).toBeCalledTimes(1);
  });
});
