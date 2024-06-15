import { TransferFileContext, useTransferFileState } from '../context';

type TransferFileProviderProps = {
  children: React.ReactNode;
};

export const TransferFileProvider: React.FC<TransferFileProviderProps> = ({ children }) => {
  const { transferFile, dispatch } = useTransferFileState();

  return <TransferFileContext.Provider value={{ transferFile, dispatch }}>{children}</TransferFileContext.Provider>;
};
