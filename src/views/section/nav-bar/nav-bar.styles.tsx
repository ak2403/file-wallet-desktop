import styled from 'styled-components';
import { Colors } from '../../../config/colors';

export const NavLayout = styled.div`
  width: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${Colors.appBg};
  box-shadow: 0px -10px 10px 0px rgba(0, 0, 0, 0.5);
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  flex: 1;
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-top: auto;
  margin-left: 20px;
  margin-right: 20px;
`;
