import { useSelector } from 'react-redux';
import { ReducerState } from '../../types/reducer';

export const useActiveConnections = (): any[] => {
  const activeConnections = useSelector<ReducerState>((state) => state.connection.activeConnections) as any[];

  return activeConnections;
};
