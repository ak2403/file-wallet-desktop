import styled from 'styled-components';
import { Input as RInput, Button as RButton } from 'rsuite';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled(RInput)`
  width: 80%;
  margin-bottom: 20px;
`;

export const Button = styled(RButton)`
  width: 80%;
`;
