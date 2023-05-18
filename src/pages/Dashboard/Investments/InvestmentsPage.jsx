{/* this contains sidebar and navbar components usually and change the main */}

import React from "react";
import SideBar from "../../../components/Sidebar/Sidebar";
import Navbar from "../Navbar";
import '../../Dashboard/dashboard.css';
import InvestmentsContainer from "./investmentsContainer";

function InvestmentsPage (){
    return (
        <div className="dashboardlayout">
            <div> 
            <SideBar/>
            </div>
            <div>
            <Navbar/>
            <div>
            <InvestmentsContainer className="main-container"/>
           </div>
            </div>
        </div>
    );

}
export default InvestmentsPage;