export type ConnectionAction = {
  type: string;
  payload?: any[];
};

export type PendingConnection = {
  id: string;
  fromDevice: string;
  requestedBy: string;
  on: string;
};

export type ConnectionState = {
  pendingConnections: PendingConnection[];
  activeConnections: any[];
  existingConnections: any[];
};

export const ConnectionTypes = {
  FetchConnections: 'FetchConnections',
  PendingConnections: 'PendingConnections',
  ExistingConnections: 'ExistingConnections',
};
