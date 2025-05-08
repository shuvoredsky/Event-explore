import React from "react";
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="relative text-white">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/home-bg.jpg"
          alt="Footer Background"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Footer content */}
      <div className="relative container flex flex-col p-4 mx-auto md:p-8 lg:flex-row z-10">
        <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
          <li className="font-bold ">
            {" "}
            <Link to="/">Home</Link>{" "}
          </li>
          <li className="font-bold ">
            <Link to="/update-profile">My Profile</Link>
          </li>
          <li className="font-bold ">
            <Link to="/guide-line">Community</Link>
          </li>
        </ul>
        <div className="flex flex-col justify-center pt-6 lg:pt-0">
          <div className="flex justify-center space-x-4">
            {/* Social Media Icons */}
            <FaFacebook />
            <FaTwitter />
            <FaInstagramSquare />
            {/* {import.meta.env.VITE_name} */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
