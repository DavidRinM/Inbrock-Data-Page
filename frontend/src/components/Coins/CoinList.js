import React, { useState, useEffect, Fragment, Component } from "react";
import ReactSider from "../Sider/Sider"
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import Highlighter from 'react-highlight-words'
import { contentStyle, tableStyle} from "../styles"

import { Layout, Table, Button, Input, Tag, Typography} from 'antd'
import Icon from "@ant-design/icons"

import { fetchCoins, setSiderMenuItem} from "../Coins/actions"

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
                title:'Id',
                dataIndex:'id',
                key:'id',
                ...this.getColumnSearchProps('id')
            },
            {
                title:'Symbol',
                dataIndex:'symbol',
                key:'symbol',
                ...this.getColumnSearchProps('symbol')
            },
            {
                title:'Name',
                dataIndex:'name',
                key:'name',
                ...this.getColumnSearchProps('name'),
                render: item => <Tag color="purple">{item}</Tag>
            },
            {
                title:'View Details',
                dataIndex:'id',
                key:'id',
                render: id => (<Button type="primary"><Link to={`/coins/${id}`}>View</Link></Button>)
            }
        ];
        return (
            <Fragment>
                <ReactSider/>
                <Layout style={{ padding: '1rem' }}>
                    <Content style={contentStyle}>
                        <Title level={2}>Ranking Criptomonedas</Title>
                        <Table 
                        style={tableStyle}
                        bordered={true}
                        loading={loading} 
                        dataSource={this.props.data} 
                        columns={columns}/>
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