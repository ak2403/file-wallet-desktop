import { readFile } from './read-file';

describe('readFile()', () => {
  it.skip('returns buffer data for passed file', async () => {
    const readData = await readFile('Downloads/5044253.pdf');

    console.log('check data');
  });
});
