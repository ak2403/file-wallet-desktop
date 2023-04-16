import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { faCircleCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

import { ActionListLayout, ListLayout, Content, Action, ActionSmokeLayout } from './action-list.styles';
import { Icon } from '../../../ui-components/icon';
import { useApproveConnectionRequest } from '../../../hooks-action/connection';

type ActionListProps = {
  actions: object[];
};

export const ActionList: React.FC<ActionListProps> = (props) => {
  const [disableIcon, setDisableIcon] = useState(false);
  const approveConnectionRequest = useApproveConnectionRequest();

  const { actions = [] } = props;

  const onApproveClick = async (action: any) => {
    setDisableIcon(true);

    const response = await approveConnectionRequest(action.id);

    if (response) {
      setDisableIcon(false);
    }
  };

  if (!actions.length) {
    return <ActionSmokeLayout>No pending actions</ActionSmokeLayout>;
  }

  return (
    <ActionListLayout>
      {actions.map((action: any) => {
        return (
          <ListLayout key={uuid()}>
            <Content>
              <b>{`${action.requestedBy}`}</b> has requested accsess from device <b>{`${action.fromDevice}`}</b>
            </Content>

            <Action>
              <Icon
                icon={faCircleCheck}
                bgColor="#007A5A"
                disabled={disableIcon}
                onClick={() => onApproveClick(action)}
              />

              <Icon icon={faXmark} bgColor="#E01E5A" disabled={disableIcon} onClick={() => alert('dismiss')} />
            </Action>
          </ListLayout>
        );
      })}
    </ActionListLayout>
  );
};
