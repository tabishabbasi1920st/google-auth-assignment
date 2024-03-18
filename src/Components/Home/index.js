import "./index.css";
import Sidebar from "../Sidebar";
import Cookies from "js-cookie";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarContext } from "../Context/SidebarContext";
import Dashboard from "../Dashboard";

const sidebarOptionConstant = {
  dashboard: "DASHBOARD",
  transaction: "TRANSACTION",
  schedule: "SCHEDULE",
  users: "USERS",
  settings: "SETTINGS",
};

export default function Home() {
  const { selectedOptionId, setSelectedOptionId } = useContext(SidebarContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (Cookies.get("authToken") === undefined) {
      navigate("/login");
    }
  }, []);

  const renderAppropriateView = () => {
    switch (selectedOptionId) {
      case sidebarOptionConstant.dashboard:
        return <Dashboard />;
      default:
        return null;
    }
  };

  return (
    <div className="home">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      {renderAppropriateView()}
    </div>
  );
}
