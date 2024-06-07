import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  width: 50px;
  border-radius: 10px;
  padding: 10px 0;
  box-shadow:
    rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  > div {
    margin-top: 10px;
  }
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    margin-top: 10px;
  }
`;
