import { useDispatch } from 'react-redux';

import { post } from '../../api';
import { getItem, setItem } from '../../utils/local-storage';
import { SystemInformation } from '../../utils/electron';

import { useRegisterDevice } from './register-device';
import { AuthenticationTypes } from '../../types/reducer';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));
jest.mock('../../api', () => ({
  post: jest.fn(),
}));
jest.mock('../../utils/local-storage', () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
}));
jest.mock('../../utils/electron', () => ({
  SystemInformation: jest.fn(),
}));

(useDispatch as jest.Mock).mockImplementation(() => () => {});
(post as jest.Mock).mockImplementation(() => {});
(setItem as jest.Mock).mockImplementation(() => {});
(getItem as jest.Mock).mockReturnValue('mock value');
(SystemInformation as jest.Mock).mockReturnValue({
  machineId: '12345',
});

describe('useRegisterDevice()', () => {
  it('returns false when no system information received', async () => {
    (SystemInformation as jest.Mock).mockReturnValueOnce(null);

    const registerDevice = useRegisterDevice();
    const result = await registerDevice();

    expect(result).toStrictEqual({ success: false });
  });

  it('returns false and errors when post call returns error response', async () => {
    (post as jest.Mock).mockReturnValueOnce({
      status: 400,
      data: {
        errors: [
          {
            message: 'mock error',
          },
        ],
      },
    });

    const registerDevice = useRegisterDevice();
    const result = await registerDevice();

    expect(result).toStrictEqual({
      success: false,
      errors: [
        {
          message: 'mock error',
        },
      ],
    });
  });

  it('returns false and default errors when post call returns generic error with no error message', async () => {
    const mockSetItem = jest.fn();
    const mockDispatch = jest.fn();

    (useDispatch as jest.Mock).mockImplementation(() => mockDispatch);
    (setItem as jest.Mock).mockImplementation(mockSetItem);
    (post as jest.Mock).mockReturnValueOnce({
      status: 200,
      data: {
        id: 'mock id',
      },
    });

    const registerDevice = useRegisterDevice();
    const result = await registerDevice();

    expect(mockSetItem).toBeCalledTimes(1);
    expect(mockSetItem).toBeCalledWith('connection_id', 'mock id');
    expect(mockDispatch).toBeCalledTimes(1);
    expect(mockDispatch).toBeCalledWith({
      type: AuthenticationTypes.DeviceRegister,
      payload: true,
    });
    expect(result).toStrictEqual({
      success: true,
    });
  });
});
