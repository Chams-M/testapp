import React from 'react';
import './sidebar.css';
import { SidebarData } from '../../constants/data';
import { Button } from '@mui/material';


const SideBar = () => {
  return (
    <div className="sidenav">
   <div className="menu">
   {SidebarData.map(item => {
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
