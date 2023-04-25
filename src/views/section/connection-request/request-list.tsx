import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { useApproveConnectionRequest } from '../../../hooks-action/connection';

import { MenuItem, MenuContent, MenuButton, ApproveIcon, DeclineIcon } from './request-list.styles';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

type RequestListType = {
  requestedBy: string;
  fromDevice: string;
  id: string;
};

export const RequestList: React.FC<RequestListType> = (props) => {
  const [disableIcon, setDisableIcon] = useState<boolean>(false);
  const approveConnectionRequest = useApproveConnectionRequest();

  const { id, requestedBy, fromDevice } = props;

  const onApproveClick = async (id: string, approve: boolean) => {
    if (disableIcon) {
      return;
    }

    setDisableIcon(true);

    const response = await approveConnectionRequest(id, approve);

    if (response) {
      setDisableIcon(false);
    }
  };

  return (
    <MenuItem key={uuid()}>
      <MenuContent>{`${requestedBy} has requested access from ${fromDevice}`}</MenuContent>

      <MenuButton>
        <ApproveIcon icon={faCheck} onClick={() => onApproveClick(id, true)} />
        <DeclineIcon icon={faXmark} onClick={() => onApproveClick(id, false)} />
      </MenuButton>
    </MenuItem>
  );
};
