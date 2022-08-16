import "./SideBar.css";
import { useAuth } from "./auth";
import React, { useState } from "react";
import { Menu, Layout } from "antd";
import { useNavigate } from "react-router-dom";
import {
  HomeOutlined,
  FormOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;
const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [key, setKey] = useState("");
  let navigate = useNavigate();

  const handleMenuItemSelect = ({ key }) => {
    console.log(key);
    setKey(key);
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
        onClick={handleMenuItemSelect}
        selectedKeys={[key]}
        mode="inline"
      >
        <Menu.Item
          icon={<HomeOutlined />}
          key="Dashboard"
          onClick={() => {
            navigate("/");
          }}
        >
          Dashboard
        </Menu.Item>
        <Menu.Item
          icon={<FormOutlined />}
          key="Inventory"
          onClick={() => {
            navigate("/inventory");
          }}
        >
          Submit New Inventory
        </Menu.Item>
        <Menu.Item
          icon={<DatabaseOutlined />}
          key="View Data"
          onClick={() => {
            navigate("/data");
          }}
        >
          View Inventory Data
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideBar;
