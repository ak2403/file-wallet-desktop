import styled from 'styled-components';
import { MenuItem as MainMenuItem } from '@szhsin/react-menu';

import { Colors } from '../../../config/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const MenuItem = styled(MainMenuItem)`
  font-family: 'Lato', sans-serif;
  padding: 10px 5px;
`;

export const MenuContent = styled.div`
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  padding: 0 20px;
`;

export const MenuButton = styled.div``;

export const ApproveIcon = styled(FontAwesomeIcon)`
  padding: 10px;
  background-color: #ebeaeb;
  border-radius: 25px;
  margin: 0 10px;
  font-size: 14px;

  &:hover {
    background-color: #34785c;
    color: ${Colors.originalWhite};
  }
`;

export const DeclineIcon = styled(FontAwesomeIcon)`
  padding: 10px;
  background-color: #ebeaeb;
  border-radius: 25px;
  margin: 0 10px;
  font-size: 14px;

  &:hover {
    background-color: #e01e5a;
    color: ${Colors.originalWhite};
  }
`;
