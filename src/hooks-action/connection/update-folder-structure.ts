import { useDispatch } from 'react-redux';
import { FolderStructureTypes, SelectedPathType } from '../../types/reducer';
import { useConnectionId } from '../common';

export const useUpdateFolderStructure = () => {
  const connectionId = useConnectionId();
  const dispatch = useDispatch();

  return (data: SelectedPathType[]) => {
    dispatch({
      type: FolderStructureTypes.UpdateSelectedPath,
      payload: data,
    });

    const filePath = data.map(({ name }) => name).join('/');

    //@ts-ignore
    window.electron.send('access-target-folder', { connectionId, filePath, requestType: 'read' });
  };
};
