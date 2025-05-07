import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import EventsDetailsCard from "./EventsDetailsCard";
import { useLoaderData, useParams } from "react-router";
import ReserveSeat from "./ReserveSeat";

const EventsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [event, setEvent] = useState([]);

  useEffect(() => {
    const EventsDetails = data.find((singleEvent) => singleEvent.id == id);
    setEvent(EventsDetails);
  }, [data, id]);

  return (
    <div>
      <Navbar></Navbar>
      <EventsDetailsCard event={event}></EventsDetailsCard>
      <ReserveSeat></ReserveSeat>
      <Footer></Footer>
    </div>
  );
};

export default EventsDetails;
