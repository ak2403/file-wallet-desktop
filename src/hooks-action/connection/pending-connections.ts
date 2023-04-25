import { useSelector } from 'react-redux';

import { PendingConnection, ReducerState } from '../../types/reducer';

export const usePendingConnections = (): PendingConnection[] => {
  const pendingConnections = useSelector((state: ReducerState) => state.connection.pendingConnections);

  return pendingConnections;
};
