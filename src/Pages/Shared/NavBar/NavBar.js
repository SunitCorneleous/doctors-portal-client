import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import { RiMenuUnfoldFill } from "react-icons/ri";

const NavBar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const userName = user?.displayName;

  const logOutHandler = () => {
    logOutUser()
      .then(() => {
        toast.success("logged out successfully");
      })
      .catch(error => toast.error(error));
  };

  const menuItems = (
    <React.Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/appointment">Appointment</Link>
      </li>

      {user?.uid && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
      <li>
        <Link to="/contactus">Contact Us</Link>
      </li>
      {user?.email ? (
        <li>
          <button
            onClick={logOutHandler}
            className="btn btn-error rounded-md tooltip tooltip-primary tooltip-bottom"
            data-tip={`logout ${userName?.split(" ")[0]}`}
          >
            Logout
          </button>
        </li>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </React.Fragment>
  );

  return (
    <div className="navbar bg-base-100 lg:py-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case text-2xl md:text-3xl font-bold"
        >
          Doctors Portal
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end lg:hidden">
        <label
          htmlFor="dashboard-drawer"
          tabIndex={0}
          className="btn btn-ghost lg:hidden"
        >
          <RiMenuUnfoldFill className="w-6 h-6"></RiMenuUnfoldFill>
        </label>
      </div>
    </div>
  );
};

export default NavBar;
