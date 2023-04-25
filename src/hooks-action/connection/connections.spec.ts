import { useDispatch } from 'react-redux';

import { get } from '../../api';

import { useGetConnections } from './connections';
import { ConnectionTypes } from '../../types/reducer';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));
jest.mock('../../api', () => ({
  get: jest.fn(),
}));

(useDispatch as jest.Mock).mockImplementation(() => () => {});
(get as jest.Mock).mockImplementation(() => {});

describe('useGetConnections()', () => {
  it('returns success response when connection is received', async () => {
    (get as jest.Mock).mockReturnValue({
      status: 200,
    });
    const getConnections = useGetConnections();

    const result = await getConnections();

    expect(result).toStrictEqual({
      success: true,
    });
  });

  it('returns failure response when connection is not received', async () => {
    (get as jest.Mock).mockReturnValue({
      status: 400,
    });

    const getConnections = useGetConnections();

    const result = await getConnections();

    expect(result).toStrictEqual({
      success: false,
    });
  });

  it('triggers dispatch when connection is received', async () => {
    const mockDispatch = jest.fn();

    (useDispatch as jest.Mock).mockImplementation(() => mockDispatch);
    (get as jest.Mock).mockReturnValue({
      status: 200,
      data: {
        connections: [{ id: 'mock id' }],
      },
    });

    const getConnections = useGetConnections();

    await getConnections();

    expect(mockDispatch).toBeCalledTimes(1);
    expect(mockDispatch).toBeCalledWith({
      type: ConnectionTypes.FetchConnections,
      payload: [{ id: 'mock id' }],
    });
  });
});
