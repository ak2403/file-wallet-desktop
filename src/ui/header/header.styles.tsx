import styled from 'styled-components';

type HeadingProps = {
  reverse?: boolean;
};

export const Wrapper = styled.div``;

export const Heading = styled.div<HeadingProps>`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'column-reverse' : 'column')};
`;

export const Title = styled.text`
  font-family: 'Barlow', sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 24px;
  color: #424242;
`;

export const SubTitle = styled.text`
  font-family: 'Barlow', sans-serif;
  font-weight: 100;
  font-style: normal;
`;

export const Description = styled.text``;
