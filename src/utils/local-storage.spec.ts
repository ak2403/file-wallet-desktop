import { setItem, getItem, removeItem } from './local-storage';

describe('setItem()', () => {
  let spyWindow: jest.SpyInstance;

  beforeAll(() => {
    //@ts-ignore
    spyWindow = jest.spyOn(window, 'window', 'get');
  });

  afterAll(() => jest.restoreAllMocks());

  it('set an item properly', async () => {
    const mockSet = jest.fn();

    spyWindow.mockImplementation(() => ({
      store: {
        set: mockSet,
      },
    }));

    const result = await setItem('mock key', 'mock value');

    expect(mockSet).toBeCalledTimes(1);
    expect(mockSet).toBeCalledWith('mock key', 'mock value');
    expect(result).toBeTruthy();
  });

  it('suppress an error', async () => {
    spyWindow.mockImplementation(() => ({
      store: {
        set: () => {
          throw new Error('Mock error');
        },
      },
    }));

    const result = await setItem('mock key', 'mock value');

    expect(result).toBeFalsy();
  });
});

describe('getItem()', () => {
  let spyWindow: jest.SpyInstance;

  beforeAll(() => {
    //@ts-ignore
    spyWindow = jest.spyOn(window, 'window', 'get');
  });

  afterAll(() => jest.restoreAllMocks());

  it('get value of an item properly', async () => {
    const mockGet = jest.fn();

    spyWindow.mockImplementation(() => ({
      store: {
        get: mockGet,
      },
    }));

    await getItem('mock key');

    expect(mockGet).toBeCalledTimes(1);
    expect(mockGet).toBeCalledWith('mock key');
  });

  it('suppress an error', async () => {
    spyWindow.mockImplementation(() => ({
      store: {
        get: () => {
          throw new Error('Mock error');
        },
      },
    }));

    const result = await getItem('mock key');

    expect(result).toBeFalsy();
  });
});

describe('removeItem()', () => {
  let spyWindow: jest.SpyInstance;

  beforeAll(() => {
    //@ts-ignore
    spyWindow = jest.spyOn(window, 'window', 'get');
  });

  afterAll(() => jest.restoreAllMocks());

  it('removes an item properly', async () => {
    const mockRemove = jest.fn();

    spyWindow.mockImplementation(() => ({
      store: {
        remove: mockRemove,
        get: () => 'mock get',
      },
    }));

    const result = await removeItem('mock key');

    expect(mockRemove).toBeCalledTimes(1);
    expect(mockRemove).toBeCalledWith('mock key');
    expect(result).toBeTruthy();
  });

  it('should not call removeItem if value is not present', async () => {
    const mockRemove = jest.fn();

    spyWindow.mockImplementation(() => ({
      store: {
        remove: mockRemove,
        get: () => '',
      },
    }));

    const result = await removeItem('mock key');

    expect(mockRemove).toBeCalledTimes(0);
    expect(result).toBeTruthy();
  });

  it('suppress an error', async () => {
    spyWindow.mockImplementation(() => ({
      store: {
        remove: () => {
          throw new Error('Mock error');
        },
      },
    }));

    const result = await removeItem('mock key');

    expect(result).toBeFalsy();
  });
});
