import { useDispatch } from 'react-redux';
import { createConnection } from '../request/create-connection';
import { AppActionType } from '../types/reducer/actions';

export const useSetupConnection = () => {
  const dispatch = useDispatch();

  return async (code: string): Promise<void> => {
    const status = await createConnection(code);

    if (status) {
      dispatch({
        type: AppActionType.ConnectionSetup,
      });
    }

    return;
  };
};
