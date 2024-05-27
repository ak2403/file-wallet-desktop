export enum AppActionType {
  AppStartup = 'AppStartup',
  UserLogged = 'UserLogged',
  UserLogout = 'UserLogout',
}

export type AppAction = {
  type: AppActionType;
};
