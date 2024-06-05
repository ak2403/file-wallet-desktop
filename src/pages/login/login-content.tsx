import { LogoImg, Wrapper } from './login-content.styles';

import LogoInPng from '../../assets/logo.png';

export const LoginContent: React.FC = () => {
  return (
    <Wrapper>
      <LogoImg src={LogoInPng} />
    </Wrapper>
  );
};
