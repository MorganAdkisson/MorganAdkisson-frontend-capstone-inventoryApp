import "./SideBar.css";
import logo from "../images/PSRFAbLogo.png";
import React, { useState } from "react";
import { Menu, Layout } from "antd";
import { useNavigate } from "react-router-dom";
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
    </Sider>
  );
};

export default SideBar;
