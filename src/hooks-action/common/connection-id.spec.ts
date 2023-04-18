import * as reactRedux from 'react-redux';

import { useConnectionId } from './connection-id';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('useConnectionId()', () => {
  beforeEach(() => {
    (useSelectorMock as jest.Mock).mockImplementation((selector) => selector(mockStore));
  });
  afterEach(() => {
    (useSelectorMock as jest.Mock).mockClear();
  });

  const useSelectorMock = reactRedux.useSelector;

  const mockStore = {
    folderStructure: {
      connectionId: '12345',
    },
  };

  it('returns connection id properly', () => {
    const connectionId = useConnectionId();

    expect(connectionId).toBe('12345');
  });
});
