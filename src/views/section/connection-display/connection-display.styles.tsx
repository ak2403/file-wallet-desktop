import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ConnectionDisplayLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

export const ConnectionDisplayContent = styled.div`
  font-size: 14px;
  font-family: 'Lato', sans-serif;
  line-height: 20px;
`;

export const ConnectionDisplayOption = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: rgb(133 86 134 / 50%);
  }
`;

export const ConnectionDisplayIcon = styled(FontAwesomeIcon)`
  font-size: 18px;
`;
