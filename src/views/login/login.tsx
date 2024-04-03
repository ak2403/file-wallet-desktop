import React from 'react';
import { FormWrapper, Wrapper } from './login.styles';
import { Header } from '../../ui/header';
import { LoginForm } from './login-form';

const LoginComponent = (): React.ReactElement => {
  return (
    <Wrapper>
      <FormWrapper>
        <Header text="Sign In" />

        <LoginForm />
      </FormWrapper>
    </Wrapper>
  );
};

export { LoginComponent };
