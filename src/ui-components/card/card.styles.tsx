import styled from 'styled-components';
import { Colors } from '../../config/colors';

export const CardLayout = styled.div`
  background-color: ${Colors.appWhite};
  border-radius: 5px;
  width: 80%;
  padding-left: 20px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;

  p {
    font-size: 14px;
    font-family: 'Lato', sans-serif;
  }
`;
