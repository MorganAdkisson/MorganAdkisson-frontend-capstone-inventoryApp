import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./auth";
import { RightCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";

const Login = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.path || "/";

  const handleLogin = () => {
    auth.login(user);
    navigate(redirectPath, { replace: true });
  };

  return (
    <div>
      <h1 style={{ fontSize: 30 }}>Please Enter Passcode To Continue</h1>
      <label>
        Passcode:{" "}
        <input type="text" onChange={(e) => setUser(e.target.value)} />
      </label>
      <button onClick={handleLogin}>Enter</button>
    </div>
  );
};

export default Login;
