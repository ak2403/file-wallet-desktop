import { post } from '../../api';
import { useFetchPendingConnections } from './fetch-pending-connection';

import { useApproveConnectionRequest } from './approve-connection';

jest.mock('../../api', () => ({
  post: jest.fn(),
}));
jest.mock('./fetch-pending-connection', () => ({
  useFetchPendingConnections: jest.fn(),
}));

(post as jest.Mock).mockImplementation(() => {});
(useFetchPendingConnections as jest.Mock).mockImplementation(() => () => {});

describe('useApproveConnectionRequest()', () => {
  it('returns success response when post call is a success', async () => {
    (post as jest.Mock).mockReturnValue({
      status: 200,
    });

    const approveConnectionRequest = useApproveConnectionRequest();

    const result = await approveConnectionRequest('mock id', true);

    expect(result).toStrictEqual({
      success: true,
    });
  });

  it('returns false response when post call is a failure', async () => {
    (post as jest.Mock).mockReturnValue({
      status: 400,
    });

    const approveConnectionRequest = useApproveConnectionRequest();

    const result = await approveConnectionRequest('mock id', true);

    expect(result).toStrictEqual({
      success: false,
    });
  });

  it('triggers pending connection fetch when response is a success', async () => {
    const mockPendingConnections = jest.fn();

    (useFetchPendingConnections as jest.Mock).mockImplementation(() => mockPendingConnections);
    (post as jest.Mock).mockReturnValue({
      status: 200,
    });

    const approveConnectionRequest = useApproveConnectionRequest();

    const result = await approveConnectionRequest('mock id', true);

    expect(mockPendingConnections).toBeCalledTimes(1);
  });

  it('should not triggers pending connection fetch when response is a failure', async () => {
    const mockPendingConnections = jest.fn();

    (useFetchPendingConnections as jest.Mock).mockImplementation(() => mockPendingConnections);
    (post as jest.Mock).mockReturnValue({
      status: 400,
    });

    const approveConnectionRequest = useApproveConnectionRequest();

    const result = await approveConnectionRequest('mock id', true);

    expect(mockPendingConnections).not.toBeCalled();
  });
});
