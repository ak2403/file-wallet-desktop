import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import { NavLayout, Top, Bottom } from './nav-bar.styles';
import { useActiveConnections, useGetConnections } from '../../../hooks-action/connection';

import { ConnectionList } from './connection-list';
import { NavItem } from './nav-item';
import { AppHeader } from './app-header';

export const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const getConnections = useGetConnections();
  const activeConnections: any = useActiveConnections();

  useEffect(() => {
    getConnections();
  }, []);

  return (
    <NavLayout data-testid="nav-bar">
      <Top>
        <AppHeader />

        <NavItem icon={faHome} onClick={() => navigate('home')} label="Dashboard" />

        <ConnectionList connections={activeConnections} />
      </Top>

      <Bottom></Bottom>
    </NavLayout>
  );
};
