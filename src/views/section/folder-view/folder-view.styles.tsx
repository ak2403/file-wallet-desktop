import styled from 'styled-components';

export const FolderViewLayout = styled.div`
  display: flex;
  flex: 1;
  align-content: flex-start;
  flex-wrap: wrap;
  overflow: auto;
  position: relative;
`;

export const Wait = styled.div`
  position: absolute;
  border-radius: 5px;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgb(133 86 134 / 50%);
`;
