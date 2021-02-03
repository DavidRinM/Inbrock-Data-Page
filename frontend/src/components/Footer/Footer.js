import React from "react"
import { Layout } from "antd"
import { footerStyle } from "../styles"

const { Footer } = Layout;

const ReactFooter = () => {
    return(
        <Footer style={footerStyle}>
            Hecho con ❤️ desde México 
        </Footer>
    );
}

export default ReactFooter;