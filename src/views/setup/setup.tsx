import { useEffect } from 'react';
import { registerDevice } from '../../actions/register-device';
import { useNavigate } from 'react-router-dom';

const SetupComponent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    registerDevice()
      .then(({ isDeviceRegistered }) => {
        navigate('/home');
      })
      .catch(() => {
        //TODO: need to handle this later
      });
  }, []);
  return <div>Setting up...</div>;
};

export { SetupComponent };
