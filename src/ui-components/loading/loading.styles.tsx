import styled from 'styled-components';
import { Colors } from '../../config/colors';

export const LoadingLayout = styled.div`
  display: inline-block;
  width: 15px;
  height: 15px;

  &:after {
    content: ' ';
    display: block;
    width: 15px;
    height: 15px;

    border-radius: 50%;
    border: 3px solid ${Colors.appWhite};
    border-color: ${Colors.appWhite} transparent ${Colors.appWhite} transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
