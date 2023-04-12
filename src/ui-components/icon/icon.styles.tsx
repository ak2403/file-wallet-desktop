import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const IconLayout = styled.div<{ opacity: number; bgColor: string; disabled: boolean }>`
  width: 25px;
  height: 25px;
  margin: 7px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bgColor || `rgb(133 86 134 / ${props.opacity || 50}%)`};
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${(props) => props.color || '#ebeaeb'};
  font-size: 18px;
`;
