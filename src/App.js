import "./App.css";
import HomePage from "./components/HomePage";
import DataPage from "./components/DataPage";
import InventoryPage from "./components/InventoryPage";
import SideBar from "./components/SideBar";
import React, { useState } from "react";
import "antd/dist/antd.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout, Button, Typography } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import axios from "axios";
// import logo from "./images/logo-placeholder.png";
const URL = "https://adkisson-capstone-front-end.herokuapp.com/inventory";

const { Header, Footer, Content } = Layout;
const { Title } = Typography;

// const addInventory = (inventoryData) => {
//   axios
//   .post()
// }

function App() {
  const addInventory = (submittedForm) => {
    axios
      .post(`${URL}`, submittedForm)
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <Router>
        <Layout>
          <Header className="header">
            <Title style={{ color: "white" }}>
              Pinto Abalone Recovery Project
            </Title>
            <Button
              className="inventory-btn"
              type="primary"
              icon={<PlusCircleOutlined />}
            >
              Record New Inventory
            </Button>
          </Header>
          <Layout
            style={{
              minHeight: "100vh",
            }}
          >
            <SideBar />
            <Layout className="site-layout">
              <Header
                className="site-layout-background"
                style={{
                  padding: 0,
                }}
              />
              <Content
                style={{
                  margin: "0 16px",
                  padding: 24,
                  minHeight: 360,
                }}
                className="site-layout-background"
              >
                <Routes>
                  <Route exact path="/" element={<HomePage />} />
                  <Route
                    exact
                    path="/inventory"
                    element={<InventoryPage addInvCallback={addInventory} />}
                  />
                  <Route exact path="/data" element={<DataPage />} />
                </Routes>
              </Content>
              <Footer
                style={{
                  textAlign: "center",
                }}
              >
                PSRF Inventory Mgmt ©2022
              </Footer>
            </Layout>
          </Layout>
        </Layout>
      </Router>
    </div>
  );
}

export default App;

/* <div className="body">
          <Layout>
            <Sider className="sidebar">Sider</Sider>
          </Layout>
          <Layout>
            <Content className="content-container">Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </div> */
