import styled from 'styled-components';

export const ActionListLayout = styled.div`
  padding: 20px;
  display: flex;
`;

export const ListLayout = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  padding: 10px 20px;
  border: 1px solid #b3b3b3;
  border-radius: 5px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  flex: 1;
`;

export const Action = styled.div`
  display: flex;
  width: 200px;
  padding: 0 20px;
  justify-content: space-around;
`;

export const ActionSmokeLayout = styled.div`
  height: 100%;
  border-radius: 5px;
  background-color: #dfdfdf;
  font-family: 'Lato', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
`;
