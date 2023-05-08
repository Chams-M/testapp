{/* this contains sidebar and navbar components usually and change the main */}

import React from "react";
import SideBar from "../../components/Sidebar/Sidebar";
import Navbar from "./Navbar";
import MainContainer from "./MainContainer/MainContainer";
import './dashboard.css';

function Dashboard (){

    return (
        <div className="dashboardlayout">
            <div> 
            <SideBar/>
            </div>
            <div>
            <Navbar/>
            <div>
            <MainContainer className="main-container"/>
           </div>
            </div>
           
            
        </div>
    );

}
export default Dashboard;