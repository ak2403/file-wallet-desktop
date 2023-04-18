import { shallowEqual, useSelector } from 'react-redux';

import { ReducerState } from '../../types/reducer';

export const useConnectionId = () => {
  const connectionId = useSelector<ReducerState>((state) => state.folderStructure.connectionId, shallowEqual);

  return connectionId;
};
