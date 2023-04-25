import { get } from '../../api';
import { ApiDispatchResponse } from '../../types/hooks-action';

import { useExistingConnections } from './existing-connections';

export const useDisconnectConnection = () => {
  const getExistingConnections = useExistingConnections();

  const disconnectConnection = async (connectionId: string): Promise<ApiDispatchResponse> => {
    const { status } = await get(`/connections/connection/${connectionId}/disconnect`);

    if (status === 200) {
      await getExistingConnections();

      return {
        success: true,
      };
    }

    return {
      success: false,
    };
  };

  return disconnectConnection;
};
