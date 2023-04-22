import React from 'react';
import { render, screen } from '@testing-library/react';

import { LoadingView } from './loading-view';

describe('<LoadingView />', () => {
  it('renders properly', () => {
    render(<LoadingView />);

    expect(screen.getByTestId('loading-view')).toBeInTheDocument();
  });

  it('renders loading icon properly', () => {
    render(<LoadingView />);

    expect(screen.getByTestId('tail-spin-loading')).toBeInTheDocument();
  });
});
