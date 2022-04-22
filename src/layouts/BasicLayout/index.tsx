import React from 'react';
import { Avatar } from 'antd';
import ProLayout from '@ant-design/pro-layout';
import { renderRoutes } from 'react-router-config';
import { UserOutlined } from '@ant-design/icons';

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
          <Avatar shape="square" size="small" icon={<UserOutlined />} />
        </div>
      )}
    >
      {renderRoutes(route.routes)}
    </ProLayout>
  );
};

export default BasicLayout;
