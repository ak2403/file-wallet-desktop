import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Colors } from '../../../config/colors';

export const ConnectionListLayout = styled.div`
  margin-top: 5px;
`;

export const ConnectionHeader = styled.div`
  font-size: 18px;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  margin: 15px 0;
  color: ${Colors.appWhite};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AddConnectionIcon = styled(FontAwesomeIcon)`
  font-size: 18px;
  border-radius: 25px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: rgb(133 86 134 / 50%);
  }
`;

export const ConnectionForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
