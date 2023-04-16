import axios from 'axios';
import { getItem } from './store';

const API_URL = 'http://10.0.0.18:3000';

const getHeaders = async () => {
  try {
    const token = await getItem('access_token');
    const connectionId = await getItem('connection_id');

    return {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token || ''}`,
        'Relation-Id': connectionId,
        'X-Forward-Type': 'desktop',
      },
    };
  } catch (err) {
    console.log(err);
    return false;
  }
};

const get = async (endpoint) => {
  const headerParams = await getHeaders();
  const getEndpoint = `${API_URL}${endpoint}`;

  try {
    const { data } = await axios.get(getEndpoint, headerParams);

    return data;
  } catch (err) {
    console.log(err);
    return {
      status: err.status || 500,
      data: err.data || '',
    };
  }
};

export { get };
