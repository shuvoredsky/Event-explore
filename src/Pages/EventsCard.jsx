import React from "react";
import { Link } from "react-router";

const EventsCard = ({ events }) => {
  const { id, name, description, location, date, category, thumbnail } = events;

  return (
    <div className="flex justify-center">
      <div className="backdrop-blur-md bg-white/20 border border-white/30 shadow-lg rounded-xl w-96 overflow-hidden transition transform hover:scale-105 duration-300">
        <figure>
          <img
            className="w-full h-[200px] object-cover"
            src={thumbnail}
            alt={name}
          />
        </figure>
        <div className="p-5 text-white">
          <h2 className="text-xl font-bold mb-2 flex justify-between items-center">
            {name}
            <span className="badge badge-secondary text-sm">{category}</span>
          </h2>
          <p className="text-sm mb-4">{description}</p>
          <div className="mb-4">
            <span className="badge badge-outline">{location}</span>
            <br />
            <span className="badge badge-outline mt-3">{date}</span>
          </div>
          <Link
            to={`/event-details/${id}`}
            className="btn bg-white text-violet-600 hover:bg-violet-600 rounded-full"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
