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
  padding: 5px;
  cursor: pointer;
  border-radius: 5px;
  overflow: hidden;

  &:hover {
    background-color: #eaf5f9;
  }

  &:active {
    background-color: #489acc;
  }
`;

export const FolderText = styled.p`
  color: ${Colors.appBlack};
  margin-top: 5px;
  font-size: 12px;
  font-family: 'Lato', sans-serif;
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3; /* this can be any value you want */
`;
