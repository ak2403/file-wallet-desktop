import { get } from '../utils/api';

type ConnectionSearchResponseProps = {
  id: string;
  name: string;
};

export const searchConnection = async (name: string): Promise<ConnectionSearchResponseProps> => {
  const response = await get<ConnectionSearchResponseProps>(`/connection/search?name=${name}`);

  return response;
};
