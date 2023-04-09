import styled from 'styled-components';
import { Colors } from '../../../config/colors';

export const NavLayout = styled.div`
  width: 60px;
  height: 100%;
  display: flex;

  background-color: ${Colors.appBg};
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: auto;
  width: 60px;
`;
