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

import Dashboard from '../../pages/Dashboard/Dashboard';

function doThis(){
  console.log("clicked")
}

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Dashboard/>
  },
  {
    path: "/service",
    main: () => <ServiceContainer/>
  },
  {
    path: "/payment_history",
    main: () => <InvestmentsContainer/>
  }
];



const SideBar = () => {
  
  return(
<Router>    
    <div className="sidenav">
   <div className="menu">
   {SidebarData.map((item,index) => {
    if (index< SidebarData.length - 1){
      return(
    /*** <div onClick={doThis}>
    <div onClick={() => doThis()}> */
   <Link to={item.route}>
        <div className="menuItem" onClick={doThis}>
          <item.icon/>
          <span>{item.heading}</span>
        </div>
        </Link>
      );}
      else {
        return(
        <Link to="/logout">
        <div className='logout-btn' onClick={doThis}>
          <item.icon/>
          <span>{item.heading}</span>
        </div> 
        </Link>
        );
        }})}
    <Routes>
    <Route>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
              />
            ))}
            </Route>
          </Routes>
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
     </Router>
  )
}
export default SideBar
