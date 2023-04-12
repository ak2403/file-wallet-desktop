import { post } from '../../api';
import { ENDPOINTS } from '../../config/api';
import { ConnectionRequestPayload, ConnectionRequestResponse, SendConnectionRequest } from '../../types/hooks-action';

type PostResponse = {
  status: number;
  data: ConnectionRequestResponse;
};

export const sendConnectionRequest = async (data: ConnectionRequestPayload): Promise<SendConnectionRequest | null> => {
  try {
    const response: PostResponse = await post(ENDPOINTS.CONNECTION_REQUEST, data);

    if (response.status === 200) {
      return {
        isSuccess: true,
      };
    }

    return {
      isSuccess: false,
      errorMessage: response.data.message,
    };
  } catch (error) {
    console.log(error);

    return null;
  }
};
