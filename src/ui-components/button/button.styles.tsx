import styled from 'styled-components';
import { Colors } from '../../config/colors';

export const StyledButton = styled.button`
  width: 320px;
  height: 40px;
  border-radius: 5px;
  border: 0px;
  border-color: none;
  font-family: 'Lato', sans-serif;
  background-color: ${Colors.appBg};
  color: ${Colors.appWhite};
  font-size: 16px;
  padding: 4px 10px;
  margin: 10px 0;
  cursor: pointer;
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
  &:hover {
    background-color: #772177;
  }

  &:active {
    background-color: #902890;
  }
`;
