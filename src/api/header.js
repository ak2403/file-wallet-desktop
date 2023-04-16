import { getItem } from '../utils/localStorage';

export const getHeaders = async () => {
  try {
    const token = await getItem('access_token');
    const connectionId = await getItem('connection_id');

    return {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token || ''}`,
        'Connection-Id': connectionId,
        'X-Forward-Type': 'desktop',
      },
    };
  } catch (err) {
    console.log(err);
    return false;
  }
};
