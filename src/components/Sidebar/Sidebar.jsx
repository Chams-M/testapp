import React from 'react';
import './sidebar.css';
import { SidebarData , themeToggle} from '../../constants/data';
import { IconButton } from '@mui/material';


const SideBar = () => {
  return(
    <div className="sidenav">
   <div className="menu">
   {SidebarData.map((item,index) => {
    if (index< SidebarData.length - 1){
      return(
        <div className="menuItem">
          <item.icon/>
          <span>{item.heading}</span>
        </div>
      );}
      else {
        return(
        <div className='logout-btn'>
          <item.icon/>
          <span>{item.heading}</span>
        </div> );
      }
      }
      
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
