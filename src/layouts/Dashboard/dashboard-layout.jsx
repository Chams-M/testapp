import React from "react";

import SideBar from "../../components/Sidebar/Sidebar";
import Dashboard from "../../pages/Dashboard/Dashboard";
import InvestmentsPage from "../../pages/Dashboard/Investments/InvestmentsPage";
import ServiceContainer from "../../pages/Dashboard/Service/serviceContainer";
import '../../pages/Dashboard/dashboard.css';
import Navbar from "../../pages/Dashboard/Navbar";
import MainContainer
 from "../../pages/Dashboard/MainContainer/MainContainer";
import {
  Route , Routes, BrowserRouter
} from "react-router-dom";
import InvestmentsContainer from "../../pages/Dashboard/Investments/investmentsContainer";
import ProfileContainer from "../../pages/Dashboard/profile";

export default function DashboardLayout() {
  return (
      <BrowserRouter>
      <div className="dashboardlayout">
      <div>
      <SideBar>
      <Routes>
        <Route path="/dashboard" element={<MainContainer/>} />
            <Route path="/service" element={<ServiceContainer/>} />
            <Route path="/investments" element={<InvestmentsContainer/>} />
            <Route path="/email_generator" element={<InvestmentsContainer/>} />
            <Route path="/profile" element={<ProfileContainer/>} />
            <Route path="/payment_history" element={<InvestmentsContainer/>} />
        </Routes>
      </SideBar>
      </div>
      <div>
            <Navbar/>
            
      </div>
      
      </div>
      </BrowserRouter>
  );
}