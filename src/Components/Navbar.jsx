import React, { useContext } from "react";
import { NavLink } from "react-router";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Sign out successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const getActiveClass = ({ isActive }) =>
    isActive
      ? "text-white font-bold bg-violet-600 px-3 py-2 rounded"
      : "hover:text-blue-400 px-3 py-2 transition";

  return (
    <>
      {/* Fixed Navbar with Glass Effect */}
      <div className="navbar fixed top-0 left-0 z-50 w-full backdrop-blur-lg bg-white/60 shadow-sm">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/" className={getActiveClass}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/update-profile" className={getActiveClass}>
                  My Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/guide-line" className={getActiveClass}>
                  Community
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink to="/" className="btn btn-ghost text-xl">
            Jasmine
          </NavLink>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/" className={getActiveClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/update-profile" className={getActiveClass}>
                My Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/guide-line" className={getActiveClass}>
                Community
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end gap-5 pr-4">
          {user && user.photoURL ? (
            <img
              src={user.photoURL}
              alt="User"
              title={user.displayName || "User"}
              className="w-10 h-10 rounded-full object-cover hover:scale-105 transition duration-300"
            />
          ) : (
            <FaUser size={32} title="Guest User" />
          )}

          {user ? (
            <button onClick={handleLogOut} className="btn px-6">
              Logout
            </button>
          ) : (
            <NavLink to="/login" className="btn px-6">
              Login
            </NavLink>
          )}
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
