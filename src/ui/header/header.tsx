import { Heading, SubTitle, Title, Wrapper } from './header.styles';

type HeaderProps = {
  subtitle?: string;
  title: string;
  description?: string;
  reverse?: boolean;
};

export const Header: React.FC<HeaderProps> = ({ title, subtitle, reverse = false }) => {
  return (
    <Wrapper>
      <Heading reverse={reverse}>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </Heading>
    </Wrapper>
  );
};
