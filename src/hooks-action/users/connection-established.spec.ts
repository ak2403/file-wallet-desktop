import * as reactRedux from 'react-redux';

import { useConnectionEstablished } from './connection-established';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('useConnectionEstablished()', () => {
  beforeEach(() => {
    (useSelectorMock as jest.Mock).mockImplementation((selector) => selector(mockStore));
  });
  afterEach(() => {
    (useSelectorMock as jest.Mock).mockClear();
  });

  const useSelectorMock = reactRedux.useSelector;

  const mockStore = {
    authentication: {
      connectionEstablished: true,
    },
  };

  it('returns connectionEstablished properly', () => {
    const connectionEstablished = useConnectionEstablished();

    expect(connectionEstablished).toBe(true);
  });
});
