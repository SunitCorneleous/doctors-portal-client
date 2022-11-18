import React from "react";
import { Link } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard/Dashboard";
import NavBar from "../Shared/NavBar/NavBar";

const DashBoardLayout = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Dashboard></Dashboard>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link>Sidebar Item 1</Link>
            </li>
            <li>
              <Link>Sidebar Item 2</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashBoardLayout;
