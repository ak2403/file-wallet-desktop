import { post } from '../../api';
import { ENDPOINTS } from '../../config/api';

import { useFetchPendingConnections } from './pending-connection';

export const useApproveConnectionRequest = () => {
  const fetchPendingConnections = useFetchPendingConnections();

  const approveConnection = async (requestId: string) => {
    const response = await post(ENDPOINTS.APPROVE_CONNECTIONS, {
      requestId,
    });

    if (response.status === 200) {
      await fetchPendingConnections();

      return true;
    }

    return false;
  };

  return approveConnection;
};
