import axios, { AxiosHeaders, CreateAxiosDefaults, RawAxiosRequestHeaders } from 'axios';
import { getItem } from '../local-storage';

async function createHeaders(): Promise<AxiosHeaders> {
  const accessToken = await getItem('auth-token');

  return new AxiosHeaders({
    Authorization: `Bearer ${accessToken}`,
  });
}

const BaseAPI = axios.create({
  baseURL: 'http://localhost:3000',
});

BaseAPI.interceptors.request.use(
  async (config) => {
    config.headers = await createHeaders();

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export { BaseAPI };
