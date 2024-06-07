import { useState } from 'react';
import { Button, Input } from 'rsuite';
import { searchConnection } from '../../request/search-connection';

export const Dashboard = () => {
  const [connectionInput, setConnectionInput] = useState<string>('');
  const [searchedConnection, setSearchedConnection] = useState({});

  const onSearch = () => {
    searchConnection(connectionInput)
      .then((response) => {
        setSearchedConnection(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onClick = () => {
    window.electronAPI.dialog.openFile().then((response) => {
      console.log('response for openFile : ', response);
    });
  };

  return (
    <div>
      <Input
        placeholder="Enter the connection to send"
        value={connectionInput}
        onChange={(value) => setConnectionInput(value)}
      />
      <Button onClick={onSearch}>Search Connection</Button>

      {Object.keys(searchedConnection).length === 0 && (
        <>
          Name: {searchedConnection.name}
          <br />
          Status: from DB
          <Button onClick={onClick}>Select File</Button>
        </>
      )}
    </div>
  );
};
