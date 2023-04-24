import styled from 'styled-components';
import { Colors } from '../../../config/colors';

export const WelcomeLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WelcomeHeader = styled.h1`
  font-size: 42px;
  font-family: 'Lato', sans-serif;
  color: ${Colors.appBlack};
`;
