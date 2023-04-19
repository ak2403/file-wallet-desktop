import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

import { NavBar } from '../../../views/section/nav-bar';
import { ReducerState } from '../../../types/reducer';

import { HomeLayout, SideBarLayout, ContentLayout } from './home.styles';

export const HomeComponent: React.FC = () => {
  const connectionEstablished = useSelector<ReducerState>((state) => state.authentication.connectionEstablished);
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
