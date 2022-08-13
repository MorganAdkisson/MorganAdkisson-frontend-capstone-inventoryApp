import "./App.css";
import HomePage from "./components/HomePage";
import DataPage from "./components/DataPage";
import InventoryPage from "./components/InventoryPage";
import SideBar from "./components/SideBar";
import RequireAuth from "./components/RequireAuth";
import { AuthProvider } from "./components/auth";
import React, { useEffect, useState } from "react";
import "antd/dist/antd.min.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Layout, Typography } from "antd";
import axios from "axios";
import PostAddIcon from "@mui/icons-material/PostAdd";
import Button from "@material-ui/core/Button";
import Login from "./components/Login";
// import logo from "./images/logo-placeholder.png";
const URL = "https://adkisson-capstone-front-end.herokuapp.com/inventory";

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
            <Header className="header">
              <Title style={{ color: "white" }}>
                Pinto Abalone Recovery Project
              </Title>
              <Button
                className="inventory-btn"
                component={Link}
                to="/inventory"
                variant="contained"
                startIcon={<PostAddIcon />}
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
                    <Route
                      exact
                      path="/"
                      element={
                        <HomePage data={invData} fetchData={fetchData} />
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
                        <DataPage data={invData} fetchData={fetchData} />
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
                  PSRF Inventory Mgmt ©2022
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
