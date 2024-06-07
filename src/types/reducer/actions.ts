export enum AppActionType {
  AppStartup = 'AppStartup',
  UserLogged = 'UserLogged',
  UserLogout = 'UserLogout',
  ConnectionSetup = 'ConnectionSetup',
}

type AppPayload = {
  userLogged: boolean;
};

export type AppAction = {
  type: AppActionType;
  payload: AppPayload;
};
