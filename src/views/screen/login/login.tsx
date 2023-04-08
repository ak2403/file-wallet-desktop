import React, { useState } from 'react';

import { Input } from '../../../ui-components/input';
import { Button } from '../../../ui-components/button';

import { LoginLayout } from './login.styles';

import { useLoginUser } from '../../../hooks-action/users';
import { Navigate, redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const LoginComponent = () => {
  const authentication = useSelector((state: any) => state.authentication);
  const [email, setEmail] = useState('');
  const loginUser = useLoginUser();

  if (authentication.isUserLogged) {
    return <Navigate to="/setup" />;
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onClick = async () => {
    const response = await loginUser({ user: { email } });

    if (response) {
      redirect('/setup');
    }
  };

  return (
    <LoginLayout>
      <Input value={email} placeholder="Please enter your email" onChange={onChange} />

      <Button onClick={onClick}>Proceed</Button>
    </LoginLayout>
  );
};
