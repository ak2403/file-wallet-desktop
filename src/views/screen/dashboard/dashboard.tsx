import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const DashboardComponent = () => {
  const authentication = useSelector((state: any) => state.authentication);

  if (!authentication.connectionEstablished) {
    return <Navigate to="/" />;
  }

  return <>Dashboard...</>;
};
