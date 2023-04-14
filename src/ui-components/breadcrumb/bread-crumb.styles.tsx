import styled from 'styled-components';

export const BreadCrumbLayout = styled.div`
  display: flex;
  margin: 5px 0;
  font-size: 12px;
  font-family: 'Lato', sans-serif;
`;

export const Path = styled.div`
  padding: 0 3px;

  &::before {
    content: ' / ';
    height: 1px;
  }
`;
