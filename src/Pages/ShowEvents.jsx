import React from "react";
import { useLoaderData } from "react-router";
import EventsCard from "./EventsCard";

const ShowEvents = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <div>
      <div className="grid grid-cols-3 gap-5 m-3">
        {data.map((events) => (
          <EventsCard events={events} key={events.id}></EventsCard>
        ))}
      </div>
    </div>
  );
};

export default ShowEvents;
