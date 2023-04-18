import React from 'react';
import { screen, render } from '@testing-library/react';

import { AppHeader } from './app-header';

describe('AppHeader', () => {
  it('renders header properly', () => {
    render(<AppHeader />);

    expect(screen.getByText('File Sync .')).toBeInTheDocument();
  });
});
