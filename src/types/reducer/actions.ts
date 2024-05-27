export enum AppActionType {
  AppStartup = 'AppStartup',
  UserLogged = 'UserLogged',
  UserLogout = 'UserLogout',
}

type AppPayload = {
  userLogged: boolean;
};

export type AppAction = {
  type: AppActionType;
  payload: AppPayload;
};
