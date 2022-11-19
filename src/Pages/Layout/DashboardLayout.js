import React from "react";
import { Link, Outlet } from "react-router-dom";
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
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li className="mb-2">
              <Link to="/dashboard">My Appointments</Link>
            </li>
            <li>
              <Link to="/dashboard/allusers">All Users</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashBoardLayout;
