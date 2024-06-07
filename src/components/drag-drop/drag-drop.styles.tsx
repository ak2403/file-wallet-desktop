import styled from 'styled-components';
import { IoCloudUploadOutline } from 'react-icons/io5';

export const Wrapper = styled.div`
  width: 100%;
  background-color: #f8f8ff;
  border: 1px dashed #384eb7;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: 'Barlow', sans-serif;
  font-weight: 500;
  font-style: normal;
`;

export const UploadIcon = styled(IoCloudUploadOutline)`
  color: #483ea8;
`;
