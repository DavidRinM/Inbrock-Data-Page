import React, { Component, Fragment } from "react"
//import { Layout,List,Timeline,Typography } from "antd"
//import { contentStyle } from "../styles"
import ReactSider from "../Sider/Sider"
import { fetchEvents,setSiderMenuItem } from "../actions"
import { connect } from "react-redux"

//const { Title, Paragraph } = Typography;
//const { Content } = Layout;


class Events extends Component {
    componentDidMount() {
        this.props.fetchEvents()
        this.props.setSiderMenuItem("events-list")
    }

    render() {
        //const loading = this.props.data.length > 0 ? false : true;

        return(
            <Fragment>
                <ReactSider/>
            </Fragment>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        data: state.events
    }
}

const mapActionsToProps = {
    fetchEvents, 
    setSiderMenuItem
}

export default connect(mapStateToProps, mapActionsToProps)(Events);