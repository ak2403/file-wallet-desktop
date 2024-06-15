import { SideBar } from '../../components/side-bar';
import { ContentTemplate } from '../templates/content-template';
import { DisplayView, OptionView, Wrapper } from './side-bar-wrapper.styles';

type SideBarWrapperProps = {
  children: React.ReactNode;
  title: string;
};

export const SideBarWrapper: React.FC<SideBarWrapperProps> = ({ children, title }) => {
  return (
    <Wrapper>
      <OptionView>
        <SideBar />
      </OptionView>

      <DisplayView>
        <ContentTemplate title={title}>{children}</ContentTemplate>
      </DisplayView>
    </Wrapper>
  );
};
