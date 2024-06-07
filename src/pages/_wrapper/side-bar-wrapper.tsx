import { SideBar } from '../../components/side-bar';
import { DisplayView, OptionView, Wrapper } from './side-bar-wrapper.styles';

type SideBarWrapperProps = {
  children: React.ReactNode;
};

export const SideBarWrapper: React.FC<SideBarWrapperProps> = ({ children }) => {
  return (
    <Wrapper>
      <OptionView>
        <SideBar />
      </OptionView>

      <DisplayView>{children}</DisplayView>
    </Wrapper>
  );
};
