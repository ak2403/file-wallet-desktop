import { SystemInformation } from './electron';

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
        systemInformation: () => 'mock data',
      },
    }));

    const systemInformation = await SystemInformation();

    expect(systemInformation).toBe('mock data');
  });

  it('returns null when error occurs', async () => {
    spyWindow.mockImplementation(() => ({
      electron: {
        systemInformation: () => {
          throw new Error('Mock error');
        },
      },
    }));

    const systemInformation = await SystemInformation();

    expect(systemInformation).toBe(null);
  });
});
