import { fileWalletApi } from './config';

type PostResponse = {
  status: number;
  data?: any;
  error?: string;
};

export async function post<T>(url: string, payload: T, headers: object = {}): Promise<PostResponse> {
  try {
    const { status, data } = await fileWalletApi.post(url, payload, {
      headers,
    });

    return {
      status,
      data,
    };
  } catch (error) {
    return {
      status: 500,
      error: 'error',
    };
  }
}
