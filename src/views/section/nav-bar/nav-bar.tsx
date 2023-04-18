import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { faBell, faComputer, faHome } from '@fortawesome/free-solid-svg-icons';

import { NavLayout, Top, Bottom, LogoHeader } from './nav-bar.styles';
import { useGetConnections } from '../../../hooks-action/connection';
import { useSelector } from 'react-redux';
import { ConnectionList } from './connection-list';
import { NewConnection } from './new-connection';
import { Notification } from './notification';
import { NavItem } from './nav-item';

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
        <LogoHeader>File Sync .</LogoHeader>
        <NavItem icon={faHome} onClick={() => navigate('home')} label="Dashboard" />

        <ConnectionList connections={activeConnections} />

        <NewConnection />
      </Top>
      <Bottom>
        <NavItem icon={faComputer} onClick={() => navigate('pending-action')} label="Connection Request" />
        <NavItem icon={faBell} onClick={() => navigate('notification')} label="Notifications" />
      </Bottom>
      <Notification />
    </NavLayout>
  );
};
