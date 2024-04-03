import { useEffect } from 'react';
import { registerDevice } from '../../actions/register-device';
import { useNavigate } from 'react-router-dom';

const SetupComponent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    registerDevice().then(({ isDeviceRegistered }) => {
      if (isDeviceRegistered) {
        navigate('/home');
      }
    });
  }, []);
  return <div>Setting up...</div>;
};

export { SetupComponent };
