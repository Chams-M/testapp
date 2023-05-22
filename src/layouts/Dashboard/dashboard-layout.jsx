import React from "react";
import SideBar from "../../components/Sidebar/Sidebar";
import "../../pages/Dashboard/dashboard.css";
import Navbar from "../../pages/Dashboard/Navbar";
import {Outlet } from "react-router-dom";



export default function DashboardLayout() {
  return (
    <div className="dashboardlayout">
      <div>
        <SideBar>
          <Outlet />
        </SideBar>
      </div>
      <div>
        <Navbar />
      </div>
    </div>
  );
}
