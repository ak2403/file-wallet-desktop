import { shallowEqual, useSelector } from 'react-redux';

import { ReducerState, SelectedPathType } from '../../types/reducer';

export const useSelectedPath = (): SelectedPathType[] => {
  const selectedPath = useSelector<ReducerState>(
    (state) => state.folderStructure.selectedPath,
    shallowEqual,
  ) as SelectedPathType[];

  return selectedPath || [];
};
