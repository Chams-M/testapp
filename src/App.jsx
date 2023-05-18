import React from "react";
import Auth from "./Auth";
import Navbar from "./pages/Dashboard/Navbar";
import SideBar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import ServicePage from "./pages/Dashboard/Service/ServicePage";
import InvestmentsPage from "./pages/Dashboard/Investments/InvestmentsPage";
import ServiceContainer from "./pages/Dashboard/Service/serviceContainer";
import DashboardLayout from "./layouts/Dashboard/dashboard-layout.jsx";
function App() {
  return (
    <DashboardLayout/>
  );
}

export default App;
