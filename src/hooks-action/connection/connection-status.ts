import { shallowEqual, useSelector } from 'react-redux';

export const useConnectionStatus = () => {
  const status = useSelector((state: any) => state.folderStructure.status, shallowEqual);

  return status;
};
