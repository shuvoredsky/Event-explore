import React, { useEffect } from "react";
import { useLoaderData } from "react-router";
import EventsCard from "./EventsCard";
import PopularCity from "./PopularCity";
import AnimatedCounter from "../Components/AnimatedCounter";
import Slider from "../Pages/Slider";
import AOS from "aos";
import "aos/dist/aos.css";

const ShowEvents = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  const data = useLoaderData();
  // console.log(data);
  return (
    <div className=" bg-[url('/eventCardBG.jpg')] bg-cover bg-center ">
      <Slider></Slider>
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
