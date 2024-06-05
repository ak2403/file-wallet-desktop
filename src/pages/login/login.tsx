import { ContentWrapper, FormWrapper, Wrapper } from './login.styles';
import { LoginContent } from './login-content';
import { LoginForm } from './login-form';

export const Login = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <LoginContent />
      </ContentWrapper>

      <FormWrapper>
        <LoginForm />
      </FormWrapper>
    </Wrapper>
  );
};
