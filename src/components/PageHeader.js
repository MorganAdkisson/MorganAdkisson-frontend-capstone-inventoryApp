import { Button } from "antd";
import { Header } from "antd/lib/layout/layout";
import Title from "antd/lib/skeleton/Title";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

const PageHeader = () => {
  let navigate = useNavigate();
  const auth = useAuth();
  const handleLogout = () => {
    auth.logout();
  };

  return (
    <Header className="header" style={{ height: "150px" }}>
      <h1 style={{ color: "white", padding: "30px", fontSize: "50px" }}>
        Pinto Abalone Recovery Project
      </h1>
      <div>
        {!auth.user && (
          <Button onClick={() => navigate("/login")}>Login</Button>
        )}
        {auth.user && <Button onClick={handleLogout}>Logout</Button>}
      </div>
    </Header>
  );
};

export default PageHeader;
