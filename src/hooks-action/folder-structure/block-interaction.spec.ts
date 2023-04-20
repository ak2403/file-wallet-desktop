import * as reactRedux from 'react-redux';

import { useBlockInteraction } from './block-interaction';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('useBlockInteraction()', () => {
  beforeEach(() => {
    (useSelectorMock as jest.Mock).mockImplementation((selector) => selector(mockStore));
  });
  afterEach(() => {
    (useSelectorMock as jest.Mock).mockClear();
  });

  const useSelectorMock = reactRedux.useSelector;

  const mockStore = {
    folderStructure: {
      blockInteraction: true,
    },
  };

  it('returns block interaction properly', () => {
    const blockInteraction = useBlockInteraction();

    expect(blockInteraction).toStrictEqual(true);
  });
});
