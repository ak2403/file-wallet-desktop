import { Headers } from '../types/api';

import { getItem } from '../utils/local-storage';

export const headers = async (): Promise<Headers> => {
  const commonHeaders = {
    'Content-Type': 'application/json',
    'X-Forward-Type': 'desktop',
  };

  try {
    const token = await getItem('access_token');
    const connectionId = await getItem('connection_id');

    return {
      headers: {
        ...commonHeaders,
        Authorization: `Bearer ${token || ''}`,
        'Connection-Id': String(connectionId || ''),
      },
    };
  } catch (err) {
    console.log(err);
  }

  return { headers: commonHeaders };
};
