import styled from 'styled-components';
import { Colors } from '../../config/colors';

export const StyledInput = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 5px;
  border: 0px;
  background-color: ${Colors.appWhite};
  font-size: 14px;
  padding: 4px 10px;
  margin: 10px 0;
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};

  &:focus {
    outline: none;
    box-shadow: inset 0 0 0 2px ${Colors.appBg};
  }
`;
