import styled from 'styled-components';
import { Colors } from '../../config/colors';

export const BreadCrumbLayout = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 20px;
  align-items: center;
`;

export const Path = styled.div`
  padding: 0 3px;
  cursor: pointer;
  display: flex;
  align-items: center;

  svg {
    margin: 0px 5px;
  }

  text {
    font-size: 16px;
    font-family: 'Lato', sans-serif;
    color: ${Colors.appBlack};
    padding-left: 7px;
  }

  &::before {
    padding: 0 10px;
    content: '>';
    cursor: auto;
    color: #86858a;
  }
`;
