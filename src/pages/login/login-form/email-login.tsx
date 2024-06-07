import { useState } from 'react';

import { submitUser } from '../../../request/submit-user';
import { Wrapper, Input, Button } from './email-login.styles';
import { useNavigate } from 'react-router-dom';

export const EmailLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    setLoading(true);

    submitUser(email)
      .then((code) => {
        navigate('/setup', { state: { code } });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Wrapper>
      <Input placeholder="Enter the email" value={email} onChange={(value) => setEmail(value)} />
      <Button onClick={onSubmit} loading={loading}>
        Login
      </Button>
    </Wrapper>
  );
};
