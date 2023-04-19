import * as reactRedux from 'react-redux';

import { useFolders } from './folders';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('useFolders()', () => {
  beforeEach(() => {
    (useSelectorMock as jest.Mock).mockImplementation((selector) => selector(mockStore));
  });
  afterEach(() => {
    (useSelectorMock as jest.Mock).mockClear();
  });

  const useSelectorMock = reactRedux.useSelector;

  const mockStore = {
    folderStructure: {
      folders: ['mock folder'],
    },
  };

  it('returns folders properly', () => {
    const folders = useFolders();

    expect(folders).toStrictEqual(['mock folder']);
  });
});
