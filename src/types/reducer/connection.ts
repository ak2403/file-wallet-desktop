export type ConnectionAction = {
  type: string;
  payload?: any[];
};

export type ConnectionState = {
  pendingActions: object[];
  activeConnections: any[];
  existingConnections: any[];
};

export const ConnectionTypes = {
  FetchConnections: 'FetchConnections',
  PendingConnections: 'PendingConnections',
  ExistingConnections: 'ExistingConnections',
};
