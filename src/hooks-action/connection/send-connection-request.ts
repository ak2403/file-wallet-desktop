import { post } from '../../api';
import { ENDPOINTS } from '../../config/api';

export const sendConnectionRequest = async (data: any) => {
  try {
    const response = await post(ENDPOINTS.CONNECTION_REQUEST, data);

    if (response.status === 200) {
      return {
        isSuccess: true,
      };
    }

    return response;
  } catch (error) {
    console.log(error);
  }
};
