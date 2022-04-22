import React from 'react';
import { renderRoutes } from 'react-router-config';
import { IRouteConfig } from '@/routes/config';

const UserLayout: React.FC<{ route: IRouteConfig }> = ({ route }) => {
  return <>{renderRoutes(route.routes)}</>;
};

export default UserLayout;
