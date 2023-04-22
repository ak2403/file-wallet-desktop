import axios from 'axios';
import { ApiURL } from '../config/api';
import { headers } from './header';

export const post = async (endpoint, inputData) => {
  const headerParams = await headers();
  const postEndpoint = `${ApiURL}${endpoint}`;

  try {
    const { status, data } = await axios.post(postEndpoint, inputData, headerParams);

    return {
      status,
      data,
    };
  } catch (err) {
    const {
      response: { status, data },
    } = err;

    return {
      status: status || 500,
      data: data || '',
    };
  }
};

export const get = async (endpoint) => {
  const headerParams = await headers();
  const getEndpoint = `${ApiURL}${endpoint}`;

  try {
    const { status, data } = await axios.get(getEndpoint, headerParams);

    return {
      status,
      data,
    };
  } catch (err) {
    return {
      status: err.status || 500,
      data: err.data || '',
      errorMessage: err.message || 'Internal Error',
    };
  }
};
