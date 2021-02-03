import React from 'react';
import { Menu, Grid } from 'antd';

import { LoginOutlined, UserAddOutlined } from "@ant-design/icons"

//const SubMenu = Menu.SubMenu;
//const MenuItemGroup = Menu.ItemGroup;

const { useBreakpoint } = Grid;

const RightMenu = () => {
  const { md } = useBreakpoint();
  return (
    <Menu mode={md ? "horizontal" : "inline"}>
      <Menu.Item key="mail" title="Sign In">
        <a href="/login">
          <span>
            <LoginOutlined />Iniciar Sesión
          </span>
        </a>
      </Menu.Item>
      <Menu.Item key="app">
        <a href="/signup">
          <span>
            <UserAddOutlined/>Registrarse
          </span>
        </a>
      </Menu.Item>
    </Menu>
  );
}

export default RightMenu;