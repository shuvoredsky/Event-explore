import React from "react";

const PopularCity = () => {
  const cities = [
    { name: "Dhaka", image: "dhaka.jpg" },
    { name: "Sylhet", image: "sylhet.jpg" },
    { name: "Khulna", image: "khulna.jpg" },
    { name: "Jhenaidah", image: "jhenaidah.jpg" },
    { name: "Rangpur", image: "rangpur.jpg" },
    { name: "Barishal", image: "Barishal.jpg" },
  ];

  return (
    <div className="w-full bg-violet-400 py-10 px-4 md:px-10 lg:px-20">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-2">
        "Your <span className="text-red-400">City</span>, Your{" "}
        <span className="text-red-400">Vibe</span>, Your{" "}
        <span className="text-red-400">Events</span>"
      </h2>
      <h3 className="text-lg md:text-xl text-center text-white mb-8">
        Find local events you'll love. Attend, connect, and make memories.
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
        {cities.map((city) => (
          <div key={city.name} className="flex flex-col items-center">
            <img
              className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-white shadow-md hover:scale-105 transition-transform duration-300"
              src={city.image}
              alt={city.name}
            />
            <p className="text-white mt-2 font-semibold text-center">
              {city.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCity;
