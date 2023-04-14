import { useDispatch, useSelector } from 'react-redux';
import { FolderStructureTypes, SelectedPathType } from '../../types/reducer';

export const useUpdateFolderStructure = () => {
  const { connectionId } = useSelector((state: any) => state.folderStructure);
  const dispatch = useDispatch();

  console.log('connectionId: ', connectionId);

  return (data: SelectedPathType[]) => {
    dispatch({
      type: FolderStructureTypes.UpdateSelectedPath,
      payload: data,
    });

    const path = data.map(({ name }) => name).join('/');
    console.log(path);
    //@ts-ignore
    window.electron.send('access-target-folder', { connectionId, path });
  };
};
