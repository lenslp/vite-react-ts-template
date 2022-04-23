import UserLayout from '@/layouts/UserLayout';
import BasicLayout from '@/layouts/BasicLayout';
import Login from '@/pages/user/login';
import Register from '@/pages/user/register';
import Home from '@/pages/home';

// import { SmileOutlined } from '@ant-design/icons';

export interface IRouteConfig {
  path: string;
  component?: any;
  redirect?: string;
  exact?: boolean;
  title?: string;
  name?: string;
  icon?: any;
  // 是否校验权限, false 为不校验, 不存在该属性或者为true 为校验, 子路由会继承父路由的 auth 属性
  isAuth?: boolean;
  routes?: IRouteConfig[];
}

const layouts: IRouteConfig[] = [
  {
    path: '/user',
    component: UserLayout,
    routes: [
      {
        path: '/user/login',
        title: '登录',
        component: Login,
      },
      {
        path: '/user/register',
        title: '注册',
        component: Register,
      },
    ],
  },
  {
    path: '/',
    component: BasicLayout,
    title: '首页',
    redirect: '/home',
    routes: [
      {
        path: '/home',
        title: '首页',
        name: '首页',
        // icon: <SmileOutlined />,
        component: Home,
      },
    ],
  },
];

export default layouts;
