import styled from 'styled-components';

type NotificationCardLayout = {
  type: string;
};

export const NotificationCardLayout = styled.div<NotificationCardLayout>`
  background-color: ${(props) => (props.type === 'error' ? '#db3056' : '#4E8D7C')};
  border-radius: 10px;
  padding: 0px 30px;
  margin: 10px 0;

  p {
    color: #fff;
    font-size: 14px;
    font-family: 'Lato', sans-serif;
  }
`;
