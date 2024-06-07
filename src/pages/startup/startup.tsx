import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { useRunStartup } from '../../hooks/useRunStartup';
import { useIsAppLoaded } from '../../hooks/useIsAppLoaded';

import { Loader } from '../../ui/loader';
import { useIsUserLogged } from '../../hooks/useIsUserLogged';

export const Startup = () => {
  const isAppLoaded = useIsAppLoaded();
  const isUserLogged = useIsUserLogged();
  const runStartup = useRunStartup();

  useEffect(() => {
    runStartup();
  }, []);

  if (!isAppLoaded) {
    return <Loader message="Starting the application..." />;
  }

  if (isUserLogged) {
    return <Navigate to="/dashboard" />;
  }

  return <Navigate to="/" />;
};
