import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link } from 'dva/router'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import styles from './Sider.css';

function SiderSec({menu}) {
  let defaultOpenKeys=[];
  // 递归生成菜单
  const getMenus = (menuTreeN) => {
    return menuTreeN.map((item) => {
      if (item.child) {
        defaultOpenKeys.push(item.key)
        return (
          <SubMenu
            key={item.key}
            title={<span>
              {item.icon && <Icon type={item.icon} />}
              {item.name}
            </span>}
          >
            {getMenus(item.child)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item key={item.key}>
          <Link to={item.route}>
            {item.icon && <Icon type={item.icon} />}
            {item.name}
          </Link>
        </Menu.Item>
      )
    })
  }
  const menuItems = getMenus(menu)


  return (
      <Sider width={200} style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 64,marginTop:64 }}>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[menu[0].key]}
          defaultOpenKeys={defaultOpenKeys}
          style={{ height: '100%', borderRight: 0 }}
        >
          {menuItems}
        </Menu>
      </Sider>

  );
}

export default SiderSec;
