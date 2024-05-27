import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const useIsAppLoaded = (): boolean => {
  const { isAppLoaded } = useSelector((state: RootState) => state.app);

  return isAppLoaded;
};
