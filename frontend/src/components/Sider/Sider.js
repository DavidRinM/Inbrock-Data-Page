import React, { Component, Fragment } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

import { Layout, Menu } from "antd"
import Icon from "@ant-design/icons"

const { SubMenu } = Menu;
const { Sider } = Layout;

class ReactSider extends Component {
    render() {
        return (
            <Fragment>
                <Sider 
                breakpoint="md"
                collapsedWidth="0"
                width={240} 
                style={{ background: '#fff' }}>
                    <Menu
                    mode="inline"
                    selectedKeys={[this.props.sider_selected]}
                    defaultOpenKeys={['menu-exchange-rates', 'menu-updates', 'menu-coins', 'menu-events', 'menu-global', 'menu-exchanges']}
                    style={{ height: '100%', borderRight: 0 }}
                    >
                   {/* Coin Sub Menu */}
                    <SubMenu
                        key="menu-coins"
                        title={
                        <span>
                            <Icon type="dollar" />Coins
                        </span>
                        }
                        >
                        <Menu.Item key="coin-list"><Link to='/coins'>Coin Listing</Link></Menu.Item>
                        <Menu.Item key="coin-detail"><Link to='/coins/bitcoin'>Coin Detail View</Link></Menu.Item>
                    </SubMenu>
                    
                    {/* Events Sub Menu */}
                    <SubMenu
                        key="menu-events"
                        title={
                        <span>
                            <Icon type="team" />Events
                        </span>
                        }
                        >
                        <Menu.Item key="events-list"><Link to='/events/list'>Events Listing</Link></Menu.Item>
                    </SubMenu>
                    
                    {/* Exchanges Menu */}
                    <SubMenu
                    key="menu-exchanges"
                    title={
                        <span>
                            <Icon type="bank" />
                            Exchanges
                        </span>
                        }>
                    <Menu.Item key="exchanges-list"><Link to='/exchanges/list'>Exchanges Listing</Link></Menu.Item>
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