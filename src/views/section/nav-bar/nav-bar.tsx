import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { faBell, faDisplay } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-regular-svg-icons';
import { Icon } from '../../../ui-components/icon';

import { NavLayout, Top, Bottom } from './nav-bar.styles';
import { useGetConnections } from '../../../hooks-action/connection';
import { useSelector } from 'react-redux';
import { ConnectionList } from './connection-list';

export const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const getConnections = useGetConnections();
  const connections = useSelector((state: any) => state.connection);

  useEffect(() => {
    (async () => await getConnections())();
  }, []);

  const { activeConnections } = connections;

  return (
    <NavLayout>
      <Top>
        <ConnectionList connections={activeConnections} />

        <Icon icon={faDisplay} onClick={() => {}} />
      </Top>
      <Bottom>
        <Icon icon={faHandshake} onClick={() => navigate('pending-action')} />
        <Icon icon={faBell} onClick={() => navigate('notification')} />
      </Bottom>
    </NavLayout>
  );
};
