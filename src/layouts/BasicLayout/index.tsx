import React from 'react';
import ProLayout from '@ant-design/pro-layout';
import { renderRoutes } from 'react-router-config';
import UserAvatar from '@/components/UserAvatar';
import { IRouteConfig } from '@/routes/config';
import './index.less';

const prefix = 'c-basic-layout';

const BasicLayout: React.FC<{ route: IRouteConfig }> = ({ route }) => {
  return (
    <ProLayout
      className={prefix}
      title="vite-react-ts"
      navTheme="light"
      headerTheme="light"
      route={route}
      menuItemRender={(item, dom) => <a>{dom}</a>}
      rightContentRender={() => (
        <div>
          <UserAvatar />
        </div>
      )}
    >
      {renderRoutes(route.routes)}
    </ProLayout>
  );
};

export default BasicLayout;
