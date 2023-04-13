import React, { useEffect, useState } from 'react';
import { Button } from '../../../ui-components/button';
import { useLocation } from 'react-router-dom';

export const ConnectionComponent: React.FC = (props) => {
  const { state } = useLocation();
  const [folderStructure, setFolderStructure] = useState([]);

  const connectionId = state?.id;

  const onClick = () => {
    //@ts-ignore
    window.electron.send('access-target-folder', { connectionId, path: '' });
  };

  //@ts-ignore
  window.bridge.targetDataReceived(async (_: any, data: any) => {
    console.log(data);
  });

  useEffect(() => {
    //@ts-ignore
    // window.electron.send('access-target-folder', { connectionId, path: '' });
  }, []);

  return (
    <div>
      Connection
      <Button onClick={onClick}>Get Info</Button>
    </div>
  );
};
