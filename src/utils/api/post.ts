import { ApiResponse } from '../../types/utils/api';
import { fileWalletApi } from './config';

export async function post<Payload, DataResponse>(
  url: string,
  payload: Payload,
  headers: object = {},
): Promise<ApiResponse<DataResponse>> {
  try {
    const { status, data } = (await fileWalletApi.post(url, payload, {
      headers,
    })) as ApiResponse<DataResponse>;

    return {
      status,
      data,
    };
  } catch (error: any) {
    throw new Error('Error occurred');
  }
}
