import { headers } from './header';

import { getItem } from '../utils/local-storage';

jest.mock('../utils/local-storage', () => ({
  getItem: jest.fn(),
}));

(getItem as jest.Mock).mockReturnValue('mock value');

describe('headers()', () => {
  it('renders headers properly', async () => {
    const headerProps = await headers();

    expect(headerProps).toEqual({
      headers: {
        'Content-Type': 'application/json',
        'X-Forward-Type': 'desktop',
        Authorization: `Bearer mock value`,
        'Connection-Id': 'mock value',
      },
    });
  });

  it('renders common headers when getItem returns empty', async () => {
    (getItem as jest.Mock).mockReturnValue(undefined);

    const headerProps = await headers();

    expect(headerProps).toEqual({
      headers: {
        'Content-Type': 'application/json',
        'X-Forward-Type': 'desktop',
        Authorization: 'Bearer ',
        'Connection-Id': '',
      },
    });
  });

  it('renders common headers when getItem errors', async () => {
    (getItem as jest.Mock).mockImplementation(() => {
      throw new Error('Mock error');
    });

    const headerProps = await headers();

    expect(headerProps).toEqual({
      headers: {
        'Content-Type': 'application/json',
        'X-Forward-Type': 'desktop',
      },
    });
  });
});
