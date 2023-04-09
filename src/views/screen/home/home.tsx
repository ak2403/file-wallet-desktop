import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

import { NavBar } from '../../../views/section/nav-bar';

import { HomeLayout, SideBarLayout, ContentLayout } from './home.styles';

export const HomeComponent = () => {
  const authentication = useSelector((state: any) => state.authentication);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authentication.connectionEstablished) {
      navigate('/');
    }
  }, []);

  if (!authentication.connectionEstablished) {
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
