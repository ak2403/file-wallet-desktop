import { Wrapper, Divider } from './login-form.styles';
import { EmailLogin } from './email-login';
import { Header } from '../../../ui/header';

export const LoginForm: React.FC = () => {
  return (
    <Wrapper>
      <Header title="Continue to your Account" subtitle="Welcome" reverse={true} />
      <Divider>use Email</Divider>
      <EmailLogin />
    </Wrapper>
  );
};
