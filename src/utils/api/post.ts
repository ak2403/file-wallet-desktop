import { fileWalletApi } from './config';

type PostResponse = {
  status: number;
  data?: any;
  error?: string;
};

export const post = async (url: string, payload: object, headers: object = {}): Promise<PostResponse> => {
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
};
