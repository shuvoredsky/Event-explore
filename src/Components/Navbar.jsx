import React, { use } from "react";
import { Link } from "react-router";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  // console.log(user);
  // console.log(user.photoURL);

  const handleLogOut = () => {
    console.log("user try to logout");
    logOut()
      .then(() => {
        alert("sign out successfully");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="navbar bg-white  shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/update-profile">My Profile</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          Jasmine
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/" className="pl-5">
              Home
            </Link>
          </li>
          <li>
            <Link to="/update-profile">My Profile</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-5">
        {user && user.photoURL ? (
          <img
            src={user.photoURL}
            alt="User"
            title={user.displayName || "User"} // Tooltip
            className="w-10 h-10 rounded-full object-cover hover:scale-105 transition duration-300"
          />
        ) : (
          <FaUser size={32} title="Guest User" />
        )}

        {user ? (
          <button onClick={handleLogOut} className="btn  px-10">
            Logut
          </button>
        ) : (
          <Link to="/login" className="btn  px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
