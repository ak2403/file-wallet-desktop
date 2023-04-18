export type ConnectionAction = {
  type: string;
  payload: object[];
};

export type ConnectionState = {
  pendingActions: object[];
  activeConnections: any[];
};

export const ConnectionTypes = {
  FetchConnections: 'FetchConnections',
  PendingConnections: 'PendingConnections',
};
