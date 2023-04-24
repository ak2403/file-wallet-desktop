import styled from 'styled-components';
import { Colors } from '../../../config/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ConnectionRequestLayout = styled.div`
  height: 20px;
  background-color: #b3b3b3;
  padding: 15px;
  border-radius: 25px;
  font-family: 'Lato', sans-serif;
  color: ${Colors.appBlack};
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

export const ConnectionRequestIcon = styled(FontAwesomeIcon)``;
