import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import { UploadIcon, Wrapper } from './drag-drop.styles';

type DragDropProps = {
  openDialog?: any;
};

export const DragDrop: React.FC<DragDropProps> = ({ openDialog }) => {
  const onDrop = useCallback((acceptedFiles) => {
    debugger;
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Wrapper {...getRootProps()}>
      <input {...getInputProps()} />

      <UploadIcon size={'30%'} />
      <p>Drag & drop files or Browse</p>
    </Wrapper>
  );
};
