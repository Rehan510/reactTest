import React from 'react';

import { Outlet } from 'react-router-dom';
import { Layout, theme } from 'antd';
import AppHeader from '../Header/AppHeader';
import AppSidebar from '../Sidebar/AppSidebar';
const { Content } = Layout;

const AppLayout = () => {
  // const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="app-layout">
      <AppSidebar />
      <main>
        <AppHeader />
        <Content>
          <Outlet />
        </Content>
      </main>
    </Layout>
  );
};

export default AppLayout;
