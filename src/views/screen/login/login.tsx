import React from 'react';
import { Input } from '../../../ui-components/input';
import { Button } from '../../../ui-components/button';

import { LoginLayout } from './login.styles';

export const LoginComponent = () => {
  return (
    <LoginLayout>
      <Input placeholder="Please enter your email" />

      <Button label="Proceed" />
    </LoginLayout>
  );
};
