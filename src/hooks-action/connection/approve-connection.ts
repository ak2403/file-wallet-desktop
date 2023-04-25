import { post } from '../../api';
import { Endpoints } from '../../config/api';
import { ApiDispatchResponse } from '../../types/hooks-action';

import { useFetchPendingConnections } from './fetch-pending-connection';

export const useApproveConnectionRequest = () => {
  const fetchPendingConnections = useFetchPendingConnections();

  const approveConnection = async (requestId: string, approve: boolean): Promise<ApiDispatchResponse> => {
    const { status } = await post(Endpoints.ApproveConnections, {
      requestId,
      approve,
    });

    if (status === 200) {
      await fetchPendingConnections();

      return { success: true };
    }

    return { success: false };
  };

  return approveConnection;
};
