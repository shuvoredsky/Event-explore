import React, { useEffect } from "react";
import { useLoaderData } from "react-router";
import EventsCard from "./EventsCard";
import PopularCity from "./PopularCity";
import AnimatedCounter from "../Components/AnimatedCounter";
import Slider from "../Pages/Slider";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";

const ShowEvents = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  const data = useLoaderData();

  return (
    <div className="  bg-violet-400 bg-center ">
      <Helmet>
        <title>Event | Home</title>
      </Helmet>
      <Slider></Slider>
      <h2 className="text-center font-bold lg:text-3xl text-xl text-white py-5">
        Upcoming Events
      </h2>
      <div
        className="grid lg:grid-cols-3 grid-cols-1 gap-5 m-3 data-aos  "
        data-aos="zoom-out-up"
      >
        {data.map((events) => (
          <EventsCard events={events} key={events.id}></EventsCard>
        ))}
      </div>
      <PopularCity></PopularCity>
      <AnimatedCounter></AnimatedCounter>
    </div>
  );
};

export default ShowEvents;
