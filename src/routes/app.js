import React from 'react';
import { connect } from 'dva';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import MHeader from '../components/Layout/Header'
/*
import SiderTop from '../components/Layout/SiderTop'
*/
import SiderSec from '../components/Layout/SiderSec'


function App() {
  return (
    <Layout>
      <MHeader/>
      <Layout>
        <Sider  width={64} style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 ,marginTop:64}}>
          <Menu
            theme="dark"
            mode="inline"
            style={{ height: '100%', borderRight: 0 }}
            inlineCollapsed={true}
          >
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>远程协作</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>质控管理</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="inbox" />
              <span>系统配置</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <SiderSec/>
        <Layout style={{ padding: ' 24px' }}>
          <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight:'calc(100vh - 112px)',marginLeft:264,marginTop:64 }}>
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

App.propTypes = {
};

export default connect()(App);
