{/* this contains sidebar and navbar components usually and change the main */}

import React from "react";
import SideBar from "../../components/Sidebar/Sidebar";
import { AppBar } from "@mui/material";
import Navbar from "./Navbar";
import Appbar from "../../components/Appbar/Appbar";

function Dashboard (){

    return (
        <div className="dashboardlayout">
            <Navbar/>
            <SideBar/>
        </div>
    );

}
export default Dashboard;