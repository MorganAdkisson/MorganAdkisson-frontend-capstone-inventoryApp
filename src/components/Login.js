import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./auth";
import { RightCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";

const Login = () => {
  const [passcode, setPasscode] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.path || "/";

  const handleLogin = () => {
    let hardcodedPasscode = {
      passcode: "Haliotis7305",
    };

    if (passcode === hardcodedPasscode.passcode) {
      auth.login(passcode);
      navigate(redirectPath, { replace: true });
    } else {
      alert("Incorrect Passcode");
    }
  };

  return (
    <div>
      <h1 style={{ fontSize: 30 }}>Please Enter Passcode To Continue</h1>
      <label>
        Passcode:{" "}
        <input type="password" onChange={(e) => setPasscode(e.target.value)} />
      </label>
      <button onClick={handleLogin}>Enter</button>
    </div>
  );
};

export default Login;
