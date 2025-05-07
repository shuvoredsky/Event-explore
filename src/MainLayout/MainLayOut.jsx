import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import ShowEvents from "../Pages/ShowEvents";
import Slider from "../Pages/Slider";

const MainLayOut = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Slider></Slider>
      <Outlet>{/* <ShowEvents></ShowEvents> */}</Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayOut;
