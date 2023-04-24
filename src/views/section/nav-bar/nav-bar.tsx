import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { faHome } from '@fortawesome/free-solid-svg-icons';

import { NavLayout, Top, Bottom } from './nav-bar.styles';
import { useGetConnections } from '../../../hooks-action/connection';
import { useSelector } from 'react-redux';
import { ConnectionList } from './connection-list';
import { Notification } from './notification';
import { NavItem } from './nav-item';
import { AppHeader } from './app-header';
import { ReducerState } from '../../../types/reducer';

export const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const getConnections = useGetConnections();
  const activeConnections: any = useSelector<ReducerState>((state) => state.connection.activeConnections);

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
      <Notification />
    </NavLayout>
  );
};
