import React from 'react';
import { useNavigate } from 'react-router-dom';

import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-regular-svg-icons';
import { Icon } from '../../../ui-components/icon';

import { NavLayout, Bottom } from './nav-bar.styles';

export const NavBar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <NavLayout>
      <Bottom>
        <Icon icon={faHandshake} onClick={() => navigate('pending-action')} />
        <Icon icon={faBell} onClick={() => navigate('notification')} />
      </Bottom>
    </NavLayout>
  );
};
