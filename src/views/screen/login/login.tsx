import React, { useState } from 'react';

import { Input } from '../../../ui-components/input';
import { Button } from '../../../ui-components/button';

import { LoginLayout } from './login.styles';

import { useLoginUser } from '../../../hooks-action/users';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const LoginComponent: React.FC = () => {
  const authentication = useSelector((state: any) => state.authentication);
  const [email, setEmail] = useState('');
  const loginUser = useLoginUser();
  const navigate = useNavigate();

  if (authentication.isUserLogged) {
    navigate('/setup');

    return null;
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onClick = async () => {
    const response = await loginUser({ user: { email } });

    if (response) {
      navigate('/setup');

      return;
    }
  };

  return (
    <LoginLayout>
      <Input value={email} placeholder="Please enter your email" onChange={onChange} />

      <Button onClick={onClick}>Proceed</Button>
    </LoginLayout>
  );
};
