import React from 'react';
import { Menu, Grid } from 'antd';

import { HomeOutlined, DatabaseOutlined, QuestionOutlined} from "@ant-design/icons"

//const SubMenu = Menu.SubMenu;
//const MenuItemGroup = Menu.ItemGroup;

const { useBreakpoint } = Grid;

const LeftMenu = () => {
  const { md } = useBreakpoint()
  return (
    <Menu mode={md ? "horizontal" : "inline"}>
      <Menu.Item key="mail">
        <a href="https://inbrock.com">
          <span>
            <HomeOutlined/>Inicio
          </span>
        </a>
      </Menu.Item>
      {/* <SubMenu key="sub1" title={<span>Data</span>}>
        <MenuItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </MenuItemGroup>
      </SubMenu> */}
      <Menu.Item key="data">
        <a href="/">
          <span>
            <DatabaseOutlined/>Datos
          </span>
        </a>
      </Menu.Item>
      <Menu.Item key="abouot">
        <a href="/about">
          <span>
            <QuestionOutlined/>Acerca
          </span>
        </a>
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;