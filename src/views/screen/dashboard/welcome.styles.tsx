import styled from 'styled-components';
import { Colors } from '../../../config/colors';

export const WelcomeLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 20px 0;
`;

export const WelcomeHeader = styled.h1`
  font-size: 34px;
  font-family: 'Lato', sans-serif;
  color: ${Colors.appBlack};
  margin: 0;
`;
