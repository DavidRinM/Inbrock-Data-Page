import React, { Fragment, Component } from "react";
import ReactSider from "../Sider/Sider"
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import Highlighter from 'react-highlight-words'
import { contentStyle, tableStyle} from "../styles"

import { Layout, Table, Button, Input, Typography} from 'antd'
import Icon from "@ant-design/icons"

import { fetchCoins, setSiderMenuItem} from "../Coins/actions"

import coinGeckoLogo from "../../images/CoinGecko Logo.png"

const { Content } = Layout;
const { Title} = Typography;

class CoinList extends Component {

    state = {
        searchText: ''
    }

    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
            <Input
                ref={node => {
                this.searchInput = node;
                }}
                placeholder={`Search ${dataIndex}`}
                value={selectedKeys[0]}
                onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
                style={{ width: 188, marginBottom: 8, display: 'block' }}
            />
            <Button
                type="primary"
                onClick={() => this.handleSearch(selectedKeys, confirm)}
                icon="search"
                size="small"
                style={{ width: 90, marginRight: 8 }}
            >
                Search
            </Button>
            <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                Reset
            </Button>
            </div>
        ),
        filterIcon: filtered => (
            <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
            setTimeout(() => this.searchInput.select());
            }
        },
        render: text => (
            <Highlighter
            highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
            searchWords={[this.state.searchText]}
            autoEscape
            textToHighlight={text.toString()}
            />
        ),
    });

    handleSearch = (selectedKeys, confirm) => {
        confirm();
        this.setState({ searchText: selectedKeys[0] });
    };
    
    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    };

    componentDidMount () {
        this.props.fetchCoins();
        this.props.setSiderMenuItem('coin-list');
    }

    render() {
        const loading = this.props.data.length > 0 ? false: true;

        const columns=[
            {
                title:'#',
                dataIndex: 'market_cap_rank',
                key: 'market_cap_rank',
                align: "center",
                width: "3%"
            },
            {
                title:"Logo",
                dataIndex: "image",
                key: "image",
                align: "center",
                width:"7%",
                ...this.getColumnSearchProps("image"),
                render: img => <img src={img} style={{width: "25px"}} alt="Logo"></img>
            },
            {
                title:'Nombre',
                dataIndex:'name',
                key:'name',
                width:"14%",
                ...this.getColumnSearchProps('name'),
                render: name => <strong> <Link to={`/coin/${name.toLowerCase()}`} 
                                style={{color:'black'}}>{name}</Link></strong>
            },
            {
                title:'Símbolo',
                dataIndex:'symbol',
                key:'symbol',
                align: "center",
                ...this.getColumnSearchProps('symbol'),
                render: item => item.toUpperCase()
            },
            {
                title: 'Precio Actual (USD)',
                dataIndex: 'current_price',
                key: 'current_price',
                align: "left",
                ...this.getColumnSearchProps('current_price'),
                render: price =>  new Intl.NumberFormat(
                    'en-US', {
                        style:"currency",
                        currency:"USD"
                    }).format(price)
            },
            {
                title: 'Monedas Circulando',
                dataIndex: 'circulating_supply',
                key: 'circulating_supply',
                align: "left",
                ...this.getColumnSearchProps('circulating_supply'),
                render: sup =>  new Intl.NumberFormat(
                    'en-US').format(sup)
            },
            {
                title:'Capitalización (USD)',
                dataIndex: 'market_cap',
                key: 'market_cap',
                align: "left",
                ...this.getColumnSearchProps('market_cap'),
                render: cap =>  new Intl.NumberFormat(
                    'en-US', {
                        style:"currency",
                        currency:"USD"
                    }).format(cap)
            },
            {
                title:'Volumen (USD)',
                dataIndex: 'total_volume',
                key: 'total_volume',
                align: "left",
                ...this.getColumnSearchProps('total_volume'),
                render: vol =>  new Intl.NumberFormat(
                    'en-US', {
                        style:"currency",
                        currency:"USD"
                    }).format(vol)
            }
        ];
        return (
            <Fragment>
                <ReactSider/>
                <Layout style={{ padding: '0rem' }}>
                    <Content style={contentStyle}>
                        <Title level={2}>Ranking Criptomonedas</Title>
                        <Table 
                        style={tableStyle}
                        bordered={false}
                        loading={loading} 
                        dataSource={this.props.data} 
                        columns={columns}
                        showHeader={true}
                        title={() => {
                            return (
                                <div>
                                    <small>
                                        Información obtenida de:  
                                        <a href="https://coingecko.com">
                                            CoinGecko <img src={coinGeckoLogo} style={{width:"20px"}} alt="CoinGecko-Logo"></img>
                                        </a>
                                    </small>
                                </div>
                            );
                        }}
                        scroll={{x: 100}}/>
                    </Content>
                </Layout>
            </Fragment>
           
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.coins
    }
}

const mapActionsToProps = { fetchCoins, setSiderMenuItem
 }

export default connect(mapStateToProps, mapActionsToProps)(CoinList);