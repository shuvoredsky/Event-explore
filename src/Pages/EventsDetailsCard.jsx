import React from "react";

const EventsDetailsCard = ({ event }) => {
  const {
    name,
    description,
    location,
    date,
    category,
    thumbnail,
    entry_fee,
    content,
  } = event;

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <img className="w-full h-48 object-cover" src={thumbnail} alt={name} />
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-bold text-gray-800">{name}</h2>
          <span className="text-xs bg-violet-100 text-violet-600 px-3 py-1 rounded-full font-semibold">
            {category}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>

        <div className="space-y-1 text-sm text-gray-500 mb-4">
          <p>
            <span className="font-medium text-gray-700">📍 Location:</span>{" "}
            {location}
          </p>
          <p>
            <span className="font-medium text-gray-700">📅 Date:</span> {date}
          </p>
          <p>
            <span className="font-medium text-gray-700">🎫 Entry Fee:</span>{" "}
            {entry_fee}
          </p>
        </div>

        {content && (
          <p className="text-sm text-gray-700 border-t pt-3">{content}</p>
        )}
      </div>
    </div>
  );
};

export default EventsDetailsCard;
