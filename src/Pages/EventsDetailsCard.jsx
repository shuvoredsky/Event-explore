import React from "react";

const EventsDetailsCard = ({ event }) => {
  const {
    id,
    name,
    description,
    location,
    date,
    category,
    thumbnail,
    entry_fee,
  } = event;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm lg:grid-cols-1">
        <figure>
          <img className="w-full h-[200px]" src={thumbnail} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">{category}</div>
          </h2>
          <p>{description}</p>
          <div className="">
            <div className="badge badge-outline">{location}</div>
            <br />
            <div className="badge badge-outline">{date}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsDetailsCard;
