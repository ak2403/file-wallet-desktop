import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const useIsUserLogged = (): boolean => {
  const { isUserLogged } = useSelector((state: RootState) => state.app);
  console.log('isUserLogged : ', isUserLogged);
  return isUserLogged;
};
