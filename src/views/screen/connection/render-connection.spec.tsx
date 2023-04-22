import React from 'react';

import { render, screen } from '@testing-library/react';
import { RenderConnection } from './render-connection';

import { useConnectionStatus } from '../../../hooks-action/connection';
import { useConnectionId } from '../../../hooks-action/common';
import { ConnectionStatus } from '../../../types/reducer';

jest.mock('../../../hooks-action/connection', () => ({
  useConnectionStatus: jest.fn(),
}));
jest.mock('../../../hooks-action/common', () => ({
  useConnectionId: jest.fn(),
}));

(useConnectionId as jest.Mock).mockReturnValue('12345');

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

    expect(
      screen.queryByText(
        /The device is not online. Once the device is online, please re-connect by clicking the below button./,
      ),
    ).toBeInTheDocument();
  });
});
