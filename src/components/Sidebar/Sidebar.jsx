import React from 'react';
import './sidebar.css';
import { SidebarData } from '../../constants/data';


const SideBar = () => {
  return (
    <div className="sidenav">
   <div className="menu">
   {SidebarData.map((item,index)=>{
      return (
        <div className="menuItem">
          <item.icon/>
          <span>{item.heading}</span>
        </div>
      );
    })}
   </div>
     </div>
  )
}

export default SideBar
