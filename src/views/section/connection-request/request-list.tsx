import React, { useState } from 'react';

import { useApproveConnectionRequest } from '../../../hooks-action/connection';

import { MenuContent, MenuButton, ApproveIcon, DeclineIcon } from './request-list.styles';
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
    <>
      <MenuContent>{`${requestedBy} has requested access from ${fromDevice}`}</MenuContent>

      <MenuButton>
        <ApproveIcon data-testid="request-approve-icon" icon={faCheck} onClick={() => onApproveClick(id, true)} />
        <DeclineIcon data-testid="request-decline-icon" icon={faXmark} onClick={() => onApproveClick(id, false)} />
      </MenuButton>
    </>
  );
};
