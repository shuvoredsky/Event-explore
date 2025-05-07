import React from "react";
import Navbar from "./Navbar";

import EventsCard from "../Pages/EventsCard";
import PopularCity from "../Pages/PopularCity";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>

      <EventsCard></EventsCard>
      <PopularCity></PopularCity>
    </div>
  );
};

export default Home;
