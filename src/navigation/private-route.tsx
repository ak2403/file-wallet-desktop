import { Navigate } from 'react-router-dom';
import { useIsUserLogged } from '../hooks/useIsUserLogged';

type PrivateRouteProps = {
  children: React.ReactNode;
};

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const isUserLogged = useIsUserLogged();

  if (!isUserLogged) {
    return <Navigate to="/" />;
  }

  return children;
};
