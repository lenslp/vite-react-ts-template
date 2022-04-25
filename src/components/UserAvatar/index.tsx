import * as React from 'react';
import { Avatar, Dropdown, Menu, Space } from 'antd';
import { UserOutlined, DownOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

interface IUserAvatarProps {}

const UserAvatar: React.FunctionComponent<IUserAvatarProps> = () => {
  const history = useHistory();
  const menu = (
    <Menu
      items={[
        {
          type: 'group',
          label: <a onClick={() => history.push('/user/login')}>退出登陆</a>,
        },
      ]}
    />
  );
  return (
    <Dropdown overlay={menu}>
      <Space align="center">
        <Avatar size="small" icon={<UserOutlined />} />
        <DownOutlined />
      </Space>
    </Dropdown>
  );
};

export default UserAvatar;
