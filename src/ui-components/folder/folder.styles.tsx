import styled from 'styled-components';

export const FolderLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 120px;
  height: 80px;
  margin: 10px;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-family: 'Lato', sans-serif;
  padding: 5px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #eaf5f9;
  }

  &:active {
    background-color: #489acc;
  }
`;
