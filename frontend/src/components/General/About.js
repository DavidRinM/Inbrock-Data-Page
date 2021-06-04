import React, { Fragment } from "react"
import { Layout, Typography } from "antd"
import ReactSider from "../Sider/Sider"

import { contentStyle } from "../styles"

const { Content } = Layout;
const { Title } = Typography;

const About = () => {
    return(
        <Fragment>
            <ReactSider/>
            <Layout style={{ padding: '0rem' }}>
                <Content style={contentStyle}>
                    <Title level={2}>Acerca</Title>
                </Content>
            </Layout>
        </Fragment>
    );
}

export default About;