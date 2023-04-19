import * as reactRedux from 'react-redux';

import { useSelectedPath } from './selected-path';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('useSelectedPath()', () => {
  beforeEach(() => {
    (useSelectorMock as jest.Mock).mockImplementation((selector) => selector(mockStore));
  });
  afterEach(() => {
    (useSelectorMock as jest.Mock).mockClear();
  });

  const useSelectorMock = reactRedux.useSelector;

  const mockStore = {
    folderStructure: {
      selectedPath: ['mock path'],
    },
  };

  it('returns selected path properly', () => {
    const selectedPath = useSelectedPath();

    expect(selectedPath).toStrictEqual(['mock path']);
  });
});
