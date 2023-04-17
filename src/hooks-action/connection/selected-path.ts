import { shallowEqual, useSelector } from 'react-redux';

export const useSelectedPath = () => {
  const selectedPath = useSelector((state: any) => state.folderStructure.selectedPath, shallowEqual);

  return selectedPath;
};
