import styled from 'styled-components';
import { Colors } from '../../../config/colors';

export const OcLayout = styled.div`
  display: flex;
  flex: 1;
`;

export const OcImageLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OcImage = styled.img`
  width: 60%;
`;

export const OcContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Lato', sans-serif;
  color: ${Colors.appBlack};
  font-size: 24px;
`;
