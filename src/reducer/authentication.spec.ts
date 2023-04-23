import { AuthenticationTypes, Authentications } from '../types/reducer';
import { AuthenticationReducer } from './authentication';

describe('AuthenticationReducer()', () => {
  let initialState: Authentications;

  beforeEach(() => {
    initialState = {
      isAppLoaded: false,
      isUserLogged: false,
      connectionEstablished: false,
      deviceAlreadyRegistered: false,
      isUserLogout: false,
    };
  });

  describe('isAppLoaded', () => {
    it.each`
      input           | expected
      ${'app loaded'} | ${true}
      ${true}         | ${true}
      ${1}            | ${true}
      ${false}        | ${false}
      ${''}           | ${false}
      ${undefined}    | ${false}
      ${null}         | ${false}
    `('returns $expected for isAppLoaded when $input passed.', ({ input, expected }) => {
      const state = AuthenticationReducer(initialState, {
        type: AuthenticationTypes.LoadedApp,
        userLogged: input,
      });

      expect(state).toStrictEqual(
        expect.objectContaining({
          isAppLoaded: true,
        }),
      );
    });
  });

  describe('isUserLogged', () => {
    it.each`
      input           | expected
      ${'app loaded'} | ${true}
      ${true}         | ${true}
      ${1}            | ${true}
      ${false}        | ${false}
      ${''}           | ${false}
      ${undefined}    | ${false}
      ${null}         | ${false}
    `('returns $expected for isUserLogged when $input passed.', ({ input, expected }) => {
      const state = AuthenticationReducer(initialState, {
        type: AuthenticationTypes.LoadedApp,
        userLogged: input,
      });

      expect(state).toStrictEqual({
        isAppLoaded: true,
        isUserLogged: expected,
        connectionEstablished: false,
        deviceAlreadyRegistered: false,
        isUserLogout: false,
      });
    });
  });

  describe('connectionEstablished', () => {
    it.each`
      input           | expected
      ${'app loaded'} | ${true}
      ${true}         | ${true}
      ${1}            | ${true}
      ${false}        | ${false}
      ${''}           | ${false}
      ${undefined}    | ${false}
      ${null}         | ${false}
    `('returns $expected for connectionEstablished when $input passed.', ({ input, expected }) => {
      const state = AuthenticationReducer(initialState, {
        type: AuthenticationTypes.LoadedApp,
        connectionEstablished: input,
      });

      expect(state).toStrictEqual(
        expect.objectContaining({
          isAppLoaded: true,
          connectionEstablished: expected,
        }),
      );
    });
  });
});
