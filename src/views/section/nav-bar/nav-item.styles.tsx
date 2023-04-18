import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Colors } from '../../../config/colors';

export const NavItemLayout = styled.div`
  display: flex;
  height: 30px;
  padding: 5px 0;
  margin: 5px 0;
  align-items: center;
  border-radius: 5px;
  padding-left: 3px;
  cursor: pointer;

  &:hover {
    background-color: rgb(133 86 134 / 50%);
  }
`;

export const NavItemLabel = styled.span`
  font-size: 16px;
  font-family: 'Lato', sans-serif;
  color: ${Colors.appWhite};
`;

export const NavItemIcon = styled(FontAwesomeIcon)`
  margin: 0 15px;
  color: ${(props) => props.color || '#ebeaeb'};
  font-size: 16px;
`;
