import styled from 'styled-components';
import { Colors } from '../../config/colors';

type PushNotificationType = {
  type: string;
};

export const PushNotificationLayout = styled.div<PushNotificationType>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const PushNotificationCard = styled.div`
  background-color: #4e8d7c;
  padding-left: 20px;
  margin: 10px 0;
  border-radius: 5px;
  display: flex;
  align-items: flex-end;
  align-content: flex-end;
  justify-content: space-between;
  height: auto;
  width: 300px;
  right: 10px;
  position: absolute;

  p {
    color: ${Colors.originalWhite};
    font-size: 14px;
    font-family: 'Lato', sans-serif;
  }
`;
