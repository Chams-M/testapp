{/* this contains sidebar and navbar components usually and change the main */}

import React from "react";
import SideBar from "../../../components/Sidebar/Sidebar";
import Navbar from "../Navbar";
import '../../Dashboard/dashboard.css';
import ServiceContainer from "./serviceContainer";

function ServicePage (){
    return (
        <div className="dashboardlayout">
            <div> 
            <SideBar/>
            </div>
            <div>
            <Navbar/>
            <div>
            <ServiceContainer className="main-container"/>
           </div>
            </div>
 
        </div>
    );

}
export default ServicePage;