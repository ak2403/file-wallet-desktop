import { CommonOptions } from './common-options';
import { NavOptions } from './nav-options';
import { Wrapper, Bottom, Top } from './side-bar.styles';

export const SideBar = () => {
  return (
    <Wrapper>
      <Top>
        <NavOptions />
      </Top>
      <Bottom>
        <CommonOptions />
      </Bottom>
    </Wrapper>
  );
};
