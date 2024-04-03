import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  height: 100%;
  align-content: center;
  justify-content: flex-end;
  background-color: #b2dfa8;
`;

export const FormWrapper = styled.div`
  box-sizing: border-box;
  background-color: #fdfbfb;
  width: 50%;
  padding: 30px;
  border-radius: 25px 0 0 25px;
  box-shadow: 6px 0px 20px 12px rgba(0, 0, 0, 0.1);
`;

export const Form = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  & > * {
    margin: 10px 0;
  }
`;
