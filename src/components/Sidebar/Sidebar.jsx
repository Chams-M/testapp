import React from "react";
import "./sidebar.css";
import "../../pages/Dashboard/dashboard.css";
import { SidebarItems, themeToggle } from "../../constants/data";
import { IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";

function doThis() {
  console.log("clicked");
}

const SideBar = ({ children }) => {
  return (
    <div className="sidenav">
      <div className="menu">
        {SidebarItems.map((item, index) => {
          if (index < SidebarItems.length - 1) {
            return (
              <NavLink to={item.path} className="menuItem">
                <item.icon />
                <span>{item.heading}</span>
              </NavLink>
            );
          } else {
            return (
              <NavLink to={item.path} className="logout-btn">
                <item.icon />
                <span>{item.heading}</span>
              </NavLink>
            );
          }
        })}
      </div>
      <div>
        <div>
          {themeToggle.map((icon) => {
            return (
              <div className="theme-toggle">
                <IconButton className="toggleIcon-light">
                  <icon.light sx={{ fontSize: "2rem", color: "white" }} />
                </IconButton>
                <IconButton className="toggleIcon-dark">
                  <icon.dark sx={{ fontSize: "2.2rem", color: "white" }} />
                </IconButton>
              </div>
            );
          })}
        </div>
      </div>
      <div className="divider"></div>
      <main className="main-container">{children}</main>
    </div>
  );
};
export default SideBar;
