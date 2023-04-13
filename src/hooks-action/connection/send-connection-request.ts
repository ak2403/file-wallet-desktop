import { post } from '../../api';
import { ENDPOINTS } from '../../config/api';
import { ApiDispatchResponse, ConnectionRequestPayload } from '../../types/hooks-action';

export const sendConnectionRequest = async (
  connectionRequest: ConnectionRequestPayload,
): Promise<ApiDispatchResponse> => {
  try {
    const { status, data } = await post(ENDPOINTS.CONNECTION_REQUEST, connectionRequest);

    if (status === 200) {
      return {
        success: true,
      };
    }

    return {
      success: false,
      errors: data.errors || [],
    };
  } catch (error) {
    return {
      success: false,
    };
  }
};
