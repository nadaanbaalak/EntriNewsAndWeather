import React, { Component } from "react";
import { Layout } from "antd";
import Navbar from "./navbar";
import Filters from "./filters";
import "./styles/filters.css";

class PageLayout extends Component {
  state = {};
  render() {
    const { Content, Footer, Sider } = Layout;
    return (
      <Layout>
        <Navbar />
        <Layout>
          <Sider
            width="300px"
            breakpoint="lg"
            collapsedWidth="0"
            style={{ position: "fixed", height: "100vh" }}
          >
            <Filters />
          </Sider>
          <Layout className="site-layout">
            <Content
              style={{
                overflow: "initial",
                textAlign: "center",
              }}
            >
              Content
            </Content>
            <Footer style={{ textAlign: "center" }}></Footer>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default PageLayout;
