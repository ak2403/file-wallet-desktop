import { shallowEqual, useSelector } from 'react-redux';

import { ReducerState } from '../../types/reducer';

export const useConnectionEstablished = (): boolean => {
  const connectionEstablished = useSelector<ReducerState>(
    (state) => state.authentication.connectionEstablished,
    shallowEqual,
  ) as boolean;

  return connectionEstablished;
};
