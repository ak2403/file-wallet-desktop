import { post } from '../../api';

import { SystemInformation } from '../../utils/electron';

import { checkDeviceStatus } from './device-info';

jest.mock('../../api', () => ({
  post: jest.fn(),
}));
jest.mock('../../utils/electron', () => ({
  SystemInformation: jest.fn(),
}));

(post as jest.Mock).mockImplementation(() => {});
(SystemInformation as jest.Mock).mockReturnValue({
  machineId: '12345',
});

describe('checkDeviceStatus()', () => {
  it('returns false when systemInformation is null', async () => {
    (SystemInformation as jest.Mock).mockReturnValueOnce(null);

    const result = await checkDeviceStatus();

    expect(result).toStrictEqual({
      isDeviceRegistered: false,
    });
  });

  it('returns false when post call not success', async () => {
    (post as jest.Mock).mockImplementation(() => ({
      status: 400,
    }));

    const result = await checkDeviceStatus();

    expect(result).toStrictEqual({
      isDeviceRegistered: false,
    });
  });

  it('returns true when post call success', async () => {
    (post as jest.Mock).mockImplementation(() => ({
      status: 200,
    }));

    const result = await checkDeviceStatus();

    expect(result).toStrictEqual({
      isDeviceRegistered: true,
    });
  });
});
