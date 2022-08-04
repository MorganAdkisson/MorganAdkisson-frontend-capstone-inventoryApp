import "./SideBar.css";
import React, { useState } from "react";
import { Menu, Layout } from "antd";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import {
  HomeOutlined,
  FormOutlined,
  DatabaseOutlined,
  PlusCircleOutlined,
  CaretRightFilled,
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
  const selectedKey = useLocation().pathname;

  const highlight = () => {
    if (selectedKey === "/") {
      return ["1"];
    } else if (selectedKey === "/inventory") {
      return ["2"];
    }
  };

  return (
    <Sider
      className="sidebar"
      width={500}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      {/* <img src={logo} className="logo" alt="logo" /> */}
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        selectedKeys={highlight()}
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
