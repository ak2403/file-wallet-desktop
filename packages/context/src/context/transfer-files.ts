import { Dispatch, createContext, useReducer } from 'react';
import { FileInformation } from '../../../types/src/services';

/**
 * Define types and default values for TransferFile
 */
export type TransferFileProps = FileInformation['stats'] & {
  receiver: string;
};

const initialValue: TransferFileProps = {
  filePath: '',
  fileType: '',
  receiver: '',
  size: 0,
};

/**
 * reducer for managing TransferFile props
 * @param {TransferFileProps} transferFile
 * @param action
 * @returns {TransferFileProps}
 */
export enum TransferFileActionType {
  Update = 'update',
}

type TransferFileAction = {
  payload?: TransferFileProps;
  type: TransferFileActionType;
};

function transferFileReducer(transferFile: TransferFileProps, action: TransferFileAction) {
  switch (action.type) {
    case TransferFileActionType.Update:
      return { ...transferFile, ...action.payload };
    default:
      return transferFile;
  }
}

/**
 * Create context for TransferFile
 */
export type TransferFileContextProps = {
  transferFile: TransferFileProps;
  dispatch: Dispatch<TransferFileAction>;
};

export const TransferFileContext = createContext<TransferFileContextProps | null>(null);

export const useTransferFileState = (): TransferFileContextProps => {
  const [transferFile, dispatch] = useReducer(transferFileReducer, initialValue);

  return { transferFile, dispatch };
};
