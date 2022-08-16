import HomePage from "./components/HomePage";
import DataPage from "./components/DataPage";
import InventoryPage from "./components/InventoryPage";
import SideBar from "./components/SideBar";
import RequireAuth from "./components/RequireAuth";
import { AuthProvider, useAuth } from "./components/auth";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import { Layout, Typography, Button } from "antd";
import axios from "axios";
import Login from "./components/Login";
import PageHeader from "./components/PageHeader";
import "./styles/antd.customize.less";
// import logo from "./images/logo-placeholder.png";
const URL = "https://adkisson-capstone-backend.herokuapp.com/inventory";

const { Header, Footer, Content } = Layout;
const { Title } = Typography;

function App() {
  // Get all inv data
  const [invData, setData] = useState([]);
  const fetchData = () => {
    axios
      .get(`${URL}`)
      .then((resp) => {
        const responseData = [...resp.data];
        const newData = responseData.map((row) => {
          return {
            inv_date: row.inv_date,
            family: row.family,
            facility: row.facility,
            tank: row.tank,
            task_id: row.task_id,
            total_animals: row.total_animals,
            shell_lengths: row.shell_lengths,
          };
        });
        setData(newData);
      })
      .catch((err) => {
        alert("Unable to access inventory data!");
      });
  };
  useEffect(() => fetchData(), []);

  const addInventory = (submittedInv) => {
    Promise.allSettled(
      submittedInv.map((p) => {
        return axios.post(URL, p).then((results) => {
          console.log("**** Done with all calls ****");
          results.forEach((result, idx) => {
            console.log(`Result ${idx} status: ${result.status}`);
            if (result.status === "fulfilled") {
              const response = result.value;
              console.log(
                `Successfully posted : ${JSON.stringify(response.data)}\n`
              );
            } else {
              const error = result.reason;
              console.log(
                `Failed to post ${error.response.config.data} - reason: ${error.message}`
              );
              console.log(JSON.parse(error.response.config.data));
              console.log("\n");
            }
          });
        });
      })
    );
  };

  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Layout>
            <PageHeader />
            <Layout
              style={{
                minHeight: "100vh",
              }}
            >
              <SideBar />
              <Layout className="site-layout">
                <Content
                  style={{
                    margin: "0 16px",
                    padding: 24,
                    minHeight: 360,
                  }}
                  className="site-layout-background"
                >
                  <Routes>
                    <Route
                      exact
                      path="/"
                      element={
                        // <RequireAuth>
                        <HomePage data={invData} fetchData={fetchData} />
                        // </RequireAuth>
                      }
                    />
                    <Route
                      exact
                      path="/inventory"
                      element={
                        <RequireAuth>
                          <InventoryPage addInventory={addInventory} />
                        </RequireAuth>
                      }
                    />
                    <Route
                      exact
                      path="/data"
                      element={
                        // <RequireAuth>
                        <DataPage data={invData} fetchData={fetchData} />
                        // </RequireAuth>
                      }
                    />
                    <Route exact path="/login" element={<Login />} />
                  </Routes>
                </Content>
                <Footer
                  style={{
                    textAlign: "center",
                  }}
                >
                  Puget Sound Restoration Fund: Inventory Mgmt © 2022 || Created
                  By: Morgan Adkisson
                </Footer>
              </Layout>
            </Layout>
          </Layout>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
