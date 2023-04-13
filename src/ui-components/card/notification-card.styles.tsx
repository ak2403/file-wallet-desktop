import styled from 'styled-components';
import { Colors } from '../../config/colors';

type NotificationCardLayout = {
  type: string;
};

export const NotificationCardLayout = styled.div<NotificationCardLayout>`
  background-color: ${(props) => (props.type === 'error' ? '#db3056' : '#4E8D7C')};
  border-radius: 10px;
  padding-left: 20px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;

  p {
    color: ${Colors.originalWhite};
    font-size: 14px;
    font-family: 'Lato', sans-serif;
  }
`;
