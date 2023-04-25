import styled from 'styled-components';
import { Colors } from '../../../config/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ConnectionRequestLayout = styled.div`
  background-color: ${Colors.originalWhite};
  border: 0;
  border-radius: 5rem;
  box-sizing: border-box;
  color: #111827;
  font-family: 'Lato', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25rem;
  padding: 0.75rem 1rem;
  text-align: center;
  text-decoration: none #d1d5db solid;
  text-decoration-thickness: auto;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    background-color: rgb(249, 250, 251);
  }

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  &:focus-visible {
    box-shadow: none;
  }
`;

export const ConnectionRequestIcon = styled(FontAwesomeIcon)``;

export const NoList = styled.div`
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  padding: 10px 20px;
`;
