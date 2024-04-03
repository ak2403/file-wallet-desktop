import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from './login.styles';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';
import { registerUser } from '../../actions/register-user';
import { ErrorWrapper } from '../../components/error-wrapper';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const onChange = (value: string) => setEmail(value);

  const onClick = () => {
    registerUser({ email })
      .then(({ isRegistered }) => {
        if (isRegistered) {
          navigate('/setup');

          return;
        }

        setErrorMessage('Error occured.');
      })
      .catch(() => {
        setErrorMessage('Error occured.');
      });
  };

  return (
    <ErrorWrapper errorMessage={errorMessage}>
      <Form>
        <Input value={email} placeholder="Enter your email" onChange={onChange} />
        <Button label="Sign In" onClick={onClick} />
      </Form>
    </ErrorWrapper>
  );
};

export { LoginForm };
