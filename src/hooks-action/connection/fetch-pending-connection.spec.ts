import { useDispatch } from 'react-redux';

import { get } from '../../api';

import { useFetchPendingConnections } from './fetch-pending-connection';
import { ConnectionTypes } from '../../types/reducer';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));
jest.mock('../../api', () => ({
  get: jest.fn(),
}));

(useDispatch as jest.Mock).mockImplementation(() => () => {});
(get as jest.Mock).mockImplementation(() => {});

describe('useFetchPendingConnections()', () => {
  it('returns connection status properly.', async () => {
    (get as jest.Mock).mockReturnValue({
      status: 200,
      data: { pendingConnections: [] },
    });
    const fetchPendingConnections = useFetchPendingConnections();

    const result = await fetchPendingConnections();

    expect(result).toStrictEqual({
      success: true,
    });
  });

  it('calls dispatch when pending connections are recieved.', async () => {
    const mockDispatch = jest.fn();

    (useDispatch as jest.Mock).mockImplementation(() => mockDispatch);
    (get as jest.Mock).mockReturnValue({
      status: 200,
      data: { pendingConnections: [{ id: 'mock id' }] },
    });
    const fetchPendingConnections = useFetchPendingConnections();

    const result = await fetchPendingConnections();

    expect(result).toStrictEqual({
      success: true,
    });
    expect(mockDispatch).toBeCalledTimes(1);
    expect(mockDispatch).toBeCalledWith({
      type: ConnectionTypes.PendingConnections,
      payload: [{ id: 'mock id' }],
    });
  });

  it('returns false response when pending connections returns failed response.', async () => {
    (get as jest.Mock).mockReturnValue({
      status: 400,
    });
    const fetchPendingConnections = useFetchPendingConnections();

    const result = await fetchPendingConnections();

    expect(result).toStrictEqual({
      success: false,
    });
  });
});
