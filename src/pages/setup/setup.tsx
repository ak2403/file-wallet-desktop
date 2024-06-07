import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useSetupConnection } from '../../hooks/useSetupConnection';

import { Loader } from '../../ui/loader';

export const Setup: React.FC = () => {
  const navigate = useNavigate();
  const setupConnection = useSetupConnection();
  const { state } = useLocation();
  const { code } = state;

  useEffect(() => {
    setupConnection(code)
      .then(() => {
        navigate('/transfer');
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <Loader message="Registering the connection..." />;
};
