import { getSystemInfo } from './electron';

describe('headers()', () => {
  let spyWindow: jest.SpyInstance;

  beforeAll(() => {
    //@ts-ignore
    spyWindow = jest.spyOn(window, 'window', 'get');
  });

  afterAll(() => jest.restoreAllMocks());

  it('returns system information properly', async () => {
    spyWindow.mockImplementation(() => ({
      electron: {
        getSysInfo: () => 'mock data',
      },
    }));

    const systemInformation = await getSystemInfo();

    expect(systemInformation).toBe('mock data');
  });

  it('returns null when error occurs', async () => {
    spyWindow.mockImplementation(() => ({
      electron: {
        getSysInfo: () => {
          throw new Error('Mock error');
        },
      },
    }));

    const systemInformation = await getSystemInfo();

    expect(systemInformation).toBe(null);
  });
});
