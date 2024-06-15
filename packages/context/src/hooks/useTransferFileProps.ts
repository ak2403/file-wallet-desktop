import { useContext } from 'react';
import { TransferFileActionType, TransferFileContext, TransferFileProps } from '../context';

export const useTransferFileProps = (): [TransferFileProps, (props: Partial<TransferFileProps>) => {}] => {
  const { transferFile, dispatch } = useContext(TransferFileContext);

  return [
    transferFile,
    (payload: Partial<TransferFileProps>) =>
      dispatch({
        type: TransferFileActionType.Update,
        payload,
      }),
  ];
};
