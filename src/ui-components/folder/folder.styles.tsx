import styled from 'styled-components';
import { Colors } from '../../config/colors';

export const FolderLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 80px;
  height: 80px;
  margin: 5px 10px;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-family: 'Lato', sans-serif;
  padding: 5px;
  cursor: pointer;
  border-radius: 5px;
  color: ${Colors.appBlack}

  &:hover {
    background-color: #eaf5f9;
  }

  &:active {
    background-color: #489acc;
  }
`;
