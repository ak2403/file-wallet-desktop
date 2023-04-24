import * as reactRedux from 'react-redux';

import { useConnectionStatus } from './connection-status';
import { ConnectionStatus } from '../../types/reducer';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('useConnectionStatus()', () => {
  beforeEach(() => {
    (useSelectorMock as jest.Mock).mockImplementation((selector) => selector(mockStore));
  });
  afterEach(() => {
    (useSelectorMock as jest.Mock).mockClear();
  });

  const useSelectorMock = reactRedux.useSelector;

  const mockStore = {
    folderStructure: {
      status: ConnectionStatus.Active,
    },
  };

  it('returns connection status properly', () => {
    const connectionStatus = useConnectionStatus();

    expect(connectionStatus).toStrictEqual(ConnectionStatus.Active);
  });
});
