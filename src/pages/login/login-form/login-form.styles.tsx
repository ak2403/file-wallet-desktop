import styled from 'styled-components';
import { Divider as RDivider } from 'rsuite';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

export const Divider = styled(RDivider)`
  font-size: 10px;
  padding-right: 20%;
  font-family: 'Barlow', sans-serif;
  font-style: normal;
`;
