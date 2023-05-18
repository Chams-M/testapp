import React from 'react';
import './sidebar.css';
import { SidebarData , themeToggle} from '../../constants/data';
import { IconButton } from '@mui/material';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

function doThis(){
  console.log("clicked")
}

const SideBar = () => {
  return(   
    <div className="sidenav">
   <div className="menu">
   {SidebarData.map((item,index) => {
    if (index< SidebarData.length - 1){
      return(
      /*** <div onClick={doThis}>
    <div onClick={() => doThis()}> */
        <div className="menuItem" onClick={doThis}>
          <item.icon/>
          <span>{item.heading}</span>
        </div>
  
      );}
      else {
        return(
        <div className='logout-btn' onClick={doThis}>
          <item.icon/>
          <span>{item.heading}</span>
        </div> 
        );}}
      )
    }
  
  
   </div>
   <div>
    <div>
    {themeToggle.map(icon => {
      return(
        <div className="theme-toggle">
        <IconButton className='toggleIcon-light'>
        <icon.light sx={{fontSize:'2rem', color:'white'}}/>
        </IconButton>
          <IconButton   className='toggleIcon-dark'>
          <icon.dark sx={{fontSize:'2.2rem', color:'white'}} />
          </IconButton>
        </div>
      );
    })}
    </div>
   </div>
   <div className='divider'></div>
     </div>
  )
}
export default SideBar
