import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import EventsDetailsCard from "./EventsDetailsCard";
import { useLoaderData, useParams } from "react-router";
import ReserveSeat from "./ReserveSeat";
import AOS from "aos";
import "aos/dist/aos.css";

const EventsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [event, setEvent] = useState({});

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const EventsDetails = data.find((singleEvent) => singleEvent.id == id);
    setEvent(EventsDetails);
  }, [data, id]);

  return (
    <div>
      <Navbar />
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 mt-5 px-4"
        data-aos="zoom-in"
      >
        <EventsDetailsCard event={event} />
        <ReserveSeat />
      </div>
      <Footer />
    </div>
  );
};

export default EventsDetails;
