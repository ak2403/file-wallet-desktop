import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { NavBar } from '../../section/nav-bar';

import { HomeLayout, SideBarLayout, ContentLayout } from './protected.styles';
import { useConnectionEstablished } from '../../../hooks-action/users';

export const ProtectedComponent: React.FC = () => {
  const connectionEstablished = useConnectionEstablished();
  const navigate = useNavigate();

  useEffect(() => {
    if (!connectionEstablished) {
      navigate('/');
    }
  }, []);

  if (!connectionEstablished) {
    return null;
  }

  return (
    <HomeLayout>
      <SideBarLayout>
        <NavBar />
      </SideBarLayout>

      <ContentLayout>
        <Outlet />
      </ContentLayout>
    </HomeLayout>
  );
};
