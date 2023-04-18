import { post } from '../../api';
import { Endpoints } from '../../config/api';

import { useFetchPendingConnections } from './pending-connection';

export const useApproveConnectionRequest = () => {
  const fetchPendingConnections = useFetchPendingConnections();

  const approveConnection = async (requestId: string): Promise<boolean> => {
    const response = await post(Endpoints.ApproveConnections, {
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
