import { useDispatch } from 'react-redux';

import { post } from '../../api';
import { setItem } from '../../utils/local-storage';

import { useLoginUser } from './login-user';
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
}));

const defaultParams = {
  user: {
    email: 'mock@mail.com',
  },
};

(useDispatch as jest.Mock).mockImplementation(() => () => {});
(post as jest.Mock).mockImplementation(() => {});
(setItem as jest.Mock).mockImplementation(() => {});

describe('useLoginUser()', () => {
  it('returns true when user login success', async () => {
    const mockDispatch = jest.fn();
    const mockSetItem = jest.fn();

    (useDispatch as jest.Mock).mockImplementation(() => mockDispatch);
    (setItem as jest.Mock).mockImplementation(mockSetItem);
    (post as jest.Mock).mockReturnValue({
      status: 200,
      data: { token: 'mock token' },
    });

    const loginUser = useLoginUser();

    const result = await loginUser(defaultParams);

    expect(result).toStrictEqual({
      success: true,
    });
    expect(mockSetItem).toBeCalledTimes(1);
    expect(mockSetItem).toBeCalledWith('access_token', 'mock token');
    expect(mockDispatch).toBeCalledTimes(1);
    expect(mockDispatch).toBeCalledWith({
      type: AuthenticationTypes.UserLoggedIn,
      payload: true,
    });
  });

  it('returns false when user login failed', async () => {
    (post as jest.Mock).mockReturnValue({
      status: 400,
    });

    const loginUser = useLoginUser();

    const result = await loginUser(defaultParams);

    expect(result).toStrictEqual({
      success: false,
      errors: [],
    });
  });

  it('returns errors when user login throws error as response', async () => {
    (post as jest.Mock).mockReturnValue({
      status: 400,
      data: {
        errors: [
          {
            message: 'mock error',
          },
        ],
      },
    });

    const loginUser = useLoginUser();

    const result = await loginUser(defaultParams);

    expect(result).toStrictEqual({
      success: false,
      errors: [
        {
          message: 'mock error',
        },
      ],
    });
  });

  it('returns false if post call throws error', async () => {
    (post as jest.Mock).mockImplementation(() => {
      throw new Error('Mock error');
    });

    const loginUser = useLoginUser();

    const result = await loginUser(defaultParams);

    expect(result).toStrictEqual({
      success: false,
    });
  });
});
