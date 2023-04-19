import { shallowEqual, useSelector } from 'react-redux';

import { ReducerState } from '../../types/reducer';
import { FolderStructure } from '../../types/data';

export const useFolders = (): FolderStructure[] => {
  const folders = useSelector<ReducerState>(
    (state) => state.folderStructure.folders,
    shallowEqual,
  ) as FolderStructure[];

  return folders;
};
