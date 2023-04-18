import styled from 'styled-components';
import { Colors } from '../../../config/colors';

export const NavLayout = styled.div`
  width: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${Colors.appBg};
  box-shadow: 0px -10px 10px 0px rgba(0, 0, 0, 0.5);
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: auto;
`;

export const LogoHeader = styled.h1`
  font-family: 'Lato', sans-serif;
  color: ${Colors.appWhite};
`;
