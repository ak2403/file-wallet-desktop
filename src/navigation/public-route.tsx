import { Navigate } from 'react-router-dom';
import { useIsUserLogged } from '../hooks/useIsUserLogged';

type PublicRouteProps = {
  children: React.ReactNode;
};

export const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const isUserLogged = useIsUserLogged();

  if (isUserLogged) {
    return <Navigate to="/transfer" />;
  }

  return children;
};
