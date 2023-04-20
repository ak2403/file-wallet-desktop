import { shallowEqual, useSelector } from 'react-redux';

import { ReducerState } from '../../types/reducer';

export const useBlockInteraction = (): boolean => {
  const selectedPath = useSelector<ReducerState>(
    (state) => state.folderStructure.blockInteraction,
    shallowEqual,
  ) as boolean;

  return selectedPath;
};
