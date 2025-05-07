import React from "react";
import { useLoaderData } from "react-router";
import EventsCard from "./EventsCard";
import PopularCity from "./PopularCity";
import AnimatedCounter from "../Components/AnimatedCounter";
import Slider from "../Pages/Slider";

const ShowEvents = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <div className=" bg-[url('/eventCardBG.jpg')] bg-cover bg-center ">
      <Slider></Slider>
      <div className="grid grid-cols-3 gap-5 m-3  ">
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
