import React, { useEffect, useState } from 'react';

import { Input } from '../../../ui-components/input';
import { Button } from '../../../ui-components/button';

import { LoginLayout, LoginAppHeader } from './login.styles';

import { useLoginUser } from '../../../hooks-action/users';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ErrorMessage } from '../../../types/hooks-action';
import { NotificationCard } from '../../../ui-components/card';

export const LoginComponent: React.FC = () => {
  const authentication = useSelector((state: any) => state.authentication);
  const [email, setEmail] = useState<string>('');
  const [waitForCompletion, setWaitForCompletion] = useState<boolean>(false);
  const [errors, setErrors] = useState<ErrorMessage[]>([]);

  const loginUser = useLoginUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (authentication.isUserLogged) {
      navigate('/setup');

      return;
    }
  }, []);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onClick = async () => {
    setWaitForCompletion(true);

    const { success, errors = [] } = await loginUser({ user: { email } });

    if (success) {
      navigate('/setup');

      setWaitForCompletion(false);

      return;
    }

    setErrors([...errors]);

    setWaitForCompletion(false);
  };

  return (
    <LoginLayout>
      <LoginAppHeader>File Sync .</LoginAppHeader>

      <Input value={email} placeholder="Please enter your email" onChange={onChange} disabled={waitForCompletion} />

      <Button loading={waitForCompletion} onClick={onClick}>
        Proceed
      </Button>

      {errors.map(({ message }) => (
        <NotificationCard type="error" message={message} />
      ))}
    </LoginLayout>
  );
};
