import { getItem } from '../utils/localStorage';

export const getHeaders = async () => {
  try {
    const token = await getItem('access_token');
    const relationId = await getItem('relation_id');

    return {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token || ''}`,
        'Relation-Id': relationId,
        'X-Forward-Type': 'desktop',
      },
    };
  } catch (err) {
    console.log(err);
    return false;
  }
};
