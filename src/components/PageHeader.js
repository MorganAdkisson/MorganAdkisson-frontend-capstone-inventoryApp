import { Button } from "antd";
import { Header } from "antd/lib/layout/layout";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";
import "../styles/App.less";
// import PSRFlogo from "../images/PSRFAbLogo.png";

const PageHeader = () => {
  let navigate = useNavigate();
  const auth = useAuth();
  const handleLogout = () => {
    auth.logout();
  };

  return (
    <Header className="header" style={{ height: "180px" }}>
      {/* <img src={PSRFlogo} alt="PSRF Logo" /> */}
      <div style={{ textAlign: "left", margin: "50px" }}>
        <h1
          style={{
            color: "#B7D3E4",
            fontSize: "65px",
            fontStyle: "oblique",
            fontWeight: 100,
          }}
        >
          Pinto Abalone Recovery Project:
        </h1>
        <h2 style={{ fontSize: "40px", color: "#D5D5D5", textAlign: "center" }}>
          Satellite Facilities Inventory Management
        </h2>
      </div>
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
