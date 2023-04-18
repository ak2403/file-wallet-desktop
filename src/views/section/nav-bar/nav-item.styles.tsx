import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Colors } from '../../../config/colors';

export const NavItemLayout = styled.div`
  display: flex;
  background-color: rgb(133 86 134 / 50%);
  width: 200px;
  height: 40px;
  margin: 10px 0;
  align-items: center;
  border-radius: 5px;
  padding-left: 5px;
  cursor: pointer;
`;

export const NavItemLabel = styled.span`
  font-size: 14px;
  font-family: 'Lato', sans-serif;
  color: ${Colors.appWhite};
`;

export const NavItemIcon = styled(FontAwesomeIcon)`
  width: 40px;
  color: ${(props) => props.color || '#ebeaeb'};
  font-size: 18px;
`;
