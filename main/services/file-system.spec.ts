import path from 'path';
import { FileSystemService } from './file-system';

describe('FileSystemService', () => {
  describe('getFileInfo()', () => {
    it('returns file information for valid file path', () => {
      const filePath = path.join(__dirname, './file-system.ts');

      const response = FileSystemService.getFileInfo(filePath);

      expect(response).toMatchSnapshot();
    });

    it('returns with exists false when path invalid', () => {
      const filePath = path.join(__dirname, './dummy_path.txt');

      const response = FileSystemService.getFileInfo(filePath);

      expect(response.exists).toBeFalsy();
    });
  });
});
