import * as reactRedux from 'react-redux';

import { usePendingConnections } from './pending-connections';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('usePendingConnections()', () => {
  beforeEach(() => {
    (useSelectorMock as jest.Mock).mockImplementation((selector) => selector(mockStore));
  });
  afterEach(() => {
    (useSelectorMock as jest.Mock).mockClear();
  });

  const useSelectorMock = reactRedux.useSelector;

  const mockStore = {
    connection: {
      pendingConnections: [{ id: 'mock id' }],
    },
  };

  it('returns pending connections properly', () => {
    const pendingConnections = usePendingConnections();

    expect(pendingConnections).toStrictEqual([{ id: 'mock id' }]);
  });
});
