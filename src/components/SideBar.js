import "./SideBar.css";
import { useAuth } from "./auth";
import React, { useState } from "react";
import { Menu, Layout } from "antd";
import { useNavigate, NavLink } from "react-router-dom";
import {
  HomeOutlined,
  FormOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;
// const menuItems = [
//   getItem("Home", "1", <HomeOutlined />),
//   getItem("New Inventory", "sub1", <FormOutlined />, [
//     getItem("Seattle Aquarium", "2", <CaretRightFilled />),
//     getItem("Port Townsend Marine Science Center", "3", <CaretRightFilled />),
//   ]),
//   getItem("View Data", "4", <DatabaseOutlined />),
// ];
const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  let navigate = useNavigate();

  const auth = useAuth();
  const handleLogout = () => {
    auth.logout();
  };

  return (
    <Sider
      className="sidebar"
      width={500}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={[
          {
            key: "1",
            icon: <HomeOutlined />,
            label: "Home",
            onClick: () => {
              navigate("/");
            },
          },
          {
            key: "2",
            icon: <FormOutlined />,
            label: "New Inventory",
            onClick: () => {
              navigate("/inventory");
            },
          },
          {
            key: "3",
            icon: <DatabaseOutlined />,
            label: "View Data",
            onClick: () => {
              navigate("/data");
            },
          },
        ]}
      />
      {!auth.user && <NavLink to="/login">Login</NavLink>}
      {auth.user && <button onClick={handleLogout}>Logout</button>}
    </Sider>
  );
};

export default SideBar;
