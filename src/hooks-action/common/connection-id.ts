import { shallowEqual, useSelector } from 'react-redux';

export const useConnectionId = () => {
  const { connectionId } = useSelector((state: any) => state.folderStructure, shallowEqual);

  return connectionId;
};
