import { post } from '../../api';
import { Endpoints } from '../../config/api';
import { ApiDispatchResponse, ConnectionRequestPayload } from '../../types/hooks-action';

export const sendConnectionRequest = async (
  connectionRequest: ConnectionRequestPayload,
): Promise<ApiDispatchResponse> => {
  try {
    const { status, data } = await post(Endpoints.ConnectionRequest, connectionRequest);

    if (status === 200) {
      return {
        success: true,
      };
    }

    return {
      success: false,
      errors: data.errors || [
        {
          message: data.message,
        },
      ],
    };
  } catch (error) {
    return {
      success: false,
    };
  }
};
