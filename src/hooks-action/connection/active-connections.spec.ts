import * as reactRedux from 'react-redux';

import { useActiveConnections } from './active-connections';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('useActiveConnections()', () => {
  beforeEach(() => {
    (useSelectorMock as jest.Mock).mockImplementation((selector) => selector(mockStore));
  });
  afterEach(() => {
    (useSelectorMock as jest.Mock).mockClear();
  });

  const useSelectorMock = reactRedux.useSelector;

  const mockStore = {
    connection: {
      activeConnections: [{ id: '12345' }],
    },
  };

  it('returns connection status properly', () => {
    const activeConnections = useActiveConnections();

    expect(activeConnections).toStrictEqual([{ id: '12345' }]);
  });
});
