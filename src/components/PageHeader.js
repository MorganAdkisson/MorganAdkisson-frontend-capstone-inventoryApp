import { Button } from "antd";
import { Header } from "antd/lib/layout/layout";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";
import "../styles/App.less";

const PageHeader = () => {
  let navigate = useNavigate();
  const auth = useAuth();
  const handleLogout = () => {
    auth.logout();
  };

  return (
    <Header className="header" style={{ height: "150px" }}>
      <h1 style={{ color: "#B7D3E4", padding: "20px", fontSize: "45px" }}>
        Satellite Facilities Inventory Management
      </h1>
      <div>
        {!auth.passcode && (
          <Button
            onClick={() => navigate("/login")}
            style={{
              borderRadius: "10px",
              borderWidth: "2px",
              textAlign: "center",
              lineHeight: "55px",
              width: "120px",
              height: "55px",
              fontSize: "25px",
            }}
          >
            Login
          </Button>
        )}
        {auth.passcode && (
          <Button
            onClick={handleLogout}
            style={{
              borderRadius: "10px",
              borderWidth: "2px",
              textAlign: "center",
              lineHeight: "55px",
              width: "120px",
              height: "55px",
              fontSize: "25px",
            }}
          >
            Logout
          </Button>
        )}
      </div>
    </Header>
  );
};

export default PageHeader;
