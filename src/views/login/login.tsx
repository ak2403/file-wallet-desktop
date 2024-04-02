import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormWrapper, Wrapper } from './login.styles';
import { Header } from '../../ui/header';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';
import { registerUser } from '../../actions/register-user';

const LoginComponent = (): React.ReactElement => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');

  const onChange = (value: string) => setEmail(value);

  const onClick = () => {
    registerUser({ email }).then(({ isRegistered }) => {
      if (isRegistered) {
        navigate('/home');

        return;
      }
    });
  };

  return (
    <Wrapper>
      <FormWrapper>
        <Header text="Sign In" />
        <Input value={email} onChange={onChange} />
        <Button label="Sign In" onClick={onClick} />
      </FormWrapper>
    </Wrapper>
  );
};

export { LoginComponent };
