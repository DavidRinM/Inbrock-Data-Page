import React, { Component, Fragment } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

import { Layout, Menu } from "antd"
import { DollarOutlined, TeamOutlined, BankOutlined } from "@ant-design/icons"
import rank from "../../images/icons/rank.svg"

import {iconStyle} from "../styles"

const { SubMenu } = Menu;
const { Sider } = Layout;

class ReactSider extends Component {
    render() {
        return (
            <Fragment>
                <Sider 
                breakpoint="md"
                collapsedWidth="0"
                width={210} 
                style={{ background: '#fff' }}>
                    <Menu
                    mode="inline"
                    selectedKeys={[this.props.sider_selected]}
                    defaultOpenKeys={['menu-exchange-rates', 'menu-updates', 'menu-coins', 'menu-events', 'menu-global', 'menu-exchanges']}
                    style={{ height: '100%', borderRight: 0 }}
                    >
                   {/* Ranking Menu */}
                    <Menu.Item>
                        <Link to="/">
                            <span>
                            <img src={rank} style={{height:"1.25rem"}} alt="Ranking"></img>  Ranking
                            </span>
                        </Link>
                    </Menu.Item>

                    {/* Coins Menu */}
                    <SubMenu
                    key="coins-menu"
                    title={
                        <span>
                            <DollarOutlined style={iconStyle}/>
                            Criptomonedas
                        </span>
                        }>
                        <Menu.Item key="exchanges-list"><Link to='/data/defi'>DeFi</Link></Menu.Item>
                    </SubMenu>

                    {/* Events Menu */}
                    <Menu.Item>
                        <Link to="/events">
                            <span>
                            <TeamOutlined style={iconStyle}/>Eventos
                            </span>
                        </Link>
                    </Menu.Item>
                    
                    {/* Exchanges Menu */}
                    <SubMenu
                    key="menu-exchanges"
                    title={
                        <span>
                            <BankOutlined style={iconStyle}/>
                            Exchanges
                        </span>
                        }>
                    <Menu.Item key="exchanges-list"><Link to='/exchanges/list'>Listado Exchanges</Link></Menu.Item>
                    </SubMenu>
                    </Menu>
                </Sider>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        sider_selected: state.sider_selected
    }

}

export default connect(mapStateToProps)(ReactSider)