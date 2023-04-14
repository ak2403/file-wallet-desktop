import styled from 'styled-components';
import { Colors } from '../../config/colors';

export const BreadCrumbLayout = styled.div`
  display: flex;
  margin: 10px 0;
  align-items: center;
`;

export const Path = styled.div`
  padding: 0 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-family: 'Lato', sans-serif;
  color: ${Colors.appBlack};

  svg {
    margin: 0px 5px;
  }

  &::before {
    content: ' / ';
  }
`;
