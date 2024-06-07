import { Introduction } from './introduction';
import { Wrapper, Top, Content, Bottom } from './content-template.styles';

type ContentTemplateProps = {
  title: string;
  children: React.ReactNode;
};

export const ContentTemplate: React.FC<ContentTemplateProps> = ({ children, title }) => {
  return (
    <Wrapper>
      <Top>
        <Introduction title={title} />
      </Top>

      <Content>{children}</Content>

      <Bottom></Bottom>
    </Wrapper>
  );
};
