import { shallowEqual, useSelector } from 'react-redux';

export const useConnectionId = () => {
  const connectionId = useSelector((state: any) => state.folderStructure.connectionId, shallowEqual);

  return connectionId;
};
