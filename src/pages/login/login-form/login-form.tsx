import { useState } from 'react';
import { Input, Button } from 'rsuite';

import { submitUser } from '../../../request/submit-user';
import { createConnection } from '../../../request/create-connection';

export const LoginForm: React.FC = () => {
  const [logged, setLogged] = useState(false);
  const [email, setEmail] = useState('');

  const onSubmit = () => {
    submitUser(email)
      .then((code) => {
        createConnection(code)
          .then((_response) => {
            setLogged(true);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Input placeholder="Enter the email" value={email} onChange={(value) => setEmail(value)} />
      <Button onClick={onSubmit}>Login</Button>
    </>
  );
};
