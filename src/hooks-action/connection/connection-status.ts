import { shallowEqual, useSelector } from 'react-redux';
import { ConnectionStatus, ReducerState } from '../../types/reducer';

export const useConnectionStatus = (): ConnectionStatus => {
  const status = useSelector((state: ReducerState) => state.folderStructure.status, shallowEqual) as ConnectionStatus;

  return status;
};
