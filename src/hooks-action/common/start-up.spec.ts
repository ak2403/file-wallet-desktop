import { useDispatch } from 'react-redux';

import { getItem, removeItem } from '../../utils/local-storage';
import { post } from '../../api';

import { useStartUp } from './start-up';
import { AuthenticationTypes } from '../../types/reducer';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));
jest.mock('../../api', () => ({
  post: jest.fn(),
}));
jest.mock('../../utils/local-storage', () => ({
  removeItem: jest.fn(),
  getItem: jest.fn(),
}));

(useDispatch as jest.Mock).mockImplementation(() => () => {});
(post as jest.Mock).mockImplementation(() => {});
(removeItem as jest.Mock).mockReturnValue(() => {});
(getItem as jest.Mock).mockReturnValue(null);

describe('useStartUp()', () => {
  describe('userLogged', () => {
    it.each`
      accessToken     | expected
      ${'mock token'} | ${true}
      ${'@#$#@#$%^^'} | ${true}
      ${true}         | ${true}
      ${''}           | ${false}
      ${undefined}    | ${false}
      ${null}         | ${false}
      ${false}        | ${false}
    `('returns $expected when accessToken is $accessToken', async ({ accessToken, expected }) => {
      const mockRemoveItem = jest.fn();
      const mockDispatch = jest.fn();

      (useDispatch as jest.Mock).mockImplementationOnce(() => mockDispatch);
      (removeItem as jest.Mock).mockImplementation(mockRemoveItem);
      (getItem as jest.Mock).mockImplementationOnce((key) => {
        if (key === 'access_token') {
          return accessToken;
        }
      });

      const startUp = useStartUp();
      await startUp();

      expect(mockRemoveItem).toBeCalledTimes(2);
      expect(mockDispatch).toBeCalledTimes(1);
      expect(mockDispatch).toBeCalledWith({
        type: AuthenticationTypes.LoadedApp,
        userLogged: expected,
        connectionEstablished: false,
      });
    });
  });

  describe('connectionId', () => {
    it.each`
      connectionId    | expected
      ${'12345'}      | ${true}
      ${'@#$#@#$%^^'} | ${true}
      ${true}         | ${true}
      ${''}           | ${false}
      ${undefined}    | ${false}
      ${null}         | ${false}
      ${false}        | ${false}
    `('returns $expected when connectionId is $connectionId', async ({ connectionId, expected }) => {
      const mockRemoveItem = jest.fn();
      const mockDispatch = jest.fn();

      (useDispatch as jest.Mock).mockImplementationOnce(() => mockDispatch);
      (removeItem as jest.Mock).mockImplementation(mockRemoveItem);
      (getItem as jest.Mock).mockImplementation((key) => {
        if (key === 'connection_id') {
          return connectionId;
        }
      });

      const startUp = useStartUp();
      await startUp();

      expect(mockRemoveItem).toBeCalledTimes(2);
      expect(mockDispatch).toBeCalledTimes(1);
      expect(mockDispatch).toBeCalledWith({
        type: AuthenticationTypes.LoadedApp,
        userLogged: false,
        connectionEstablished: expected,
      });
    });
  });

  it('calls success dispatch when post call is success', async () => {
    const mockDispatch = jest.fn();

    (post as jest.Mock).mockReturnValue({
      status: 200,
    });
    (useDispatch as jest.Mock).mockImplementationOnce(() => mockDispatch);
    (getItem as jest.Mock).mockReturnValue('mock value');

    const startUp = useStartUp();
    await startUp();

    expect(mockDispatch).toBeCalledTimes(1);
    expect(mockDispatch).toBeCalledWith({
      type: AuthenticationTypes.LoadedApp,
      userLogged: true,
      connectionEstablished: true,
    });
  });

  it('calls false dispatch when post call is a failure', async () => {
    const mockDispatch = jest.fn();

    (post as jest.Mock).mockReturnValue({
      status: 400,
    });
    (useDispatch as jest.Mock).mockImplementationOnce(() => mockDispatch);
    (getItem as jest.Mock).mockReturnValue('mock value');

    const startUp = useStartUp();
    await startUp();

    expect(mockDispatch).toBeCalledTimes(1);
    expect(mockDispatch).toBeCalledWith({
      type: AuthenticationTypes.LoadedApp,
      userLogged: false,
      connectionEstablished: false,
    });
  });
});
