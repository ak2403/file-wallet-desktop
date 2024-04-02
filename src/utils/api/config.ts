import axios from 'axios';

const authorizationToken = (): string | null => {
  const token = localStorage.getItem('auth-token');

  if (!token) {
    return null;
  }

  return `Bearer ${token}`;
};

export const fileWalletApi = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    Authorization: authorizationToken(),
  },
});
