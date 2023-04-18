import React from 'react';

import { render, screen } from '@testing-library/react';
import { RenderConnection } from './render-connection';

import { useConnectionStatus } from '../../../hooks-action/connection';
import { ConnectionStatus } from '../../../types/reducer';

jest.mock('../../../hooks-action/connection', () => ({
  useConnectionStatus: jest.fn(),
}));

(useConnectionStatus as jest.Mock).mockReturnValue(ConnectionStatus.Initialize);

const MockChildren = () => <p>mock child</p>;

describe('<RenderConnection />', () => {
  it('render properly', () => {
    render(
      <RenderConnection>
        <MockChildren />
      </RenderConnection>,
    );

    expect(screen.queryByText('mock child')).toBeInTheDocument();
  });

  it('render smoke screen when status="inactive"', () => {
    (useConnectionStatus as jest.Mock).mockReturnValueOnce(ConnectionStatus.Inactive);

    render(
      <RenderConnection>
        <MockChildren />
      </RenderConnection>,
    );

    expect(screen.queryByText('Device not active')).toBeInTheDocument();
  });
});
