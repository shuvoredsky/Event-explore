import React from "react";

const PopularCity = () => {
  return (
    <div className="lg:h-56 w-[1260px] bg-violet-600 px-15">
      <h2 className="text-center text-3xl text-gray-400 font-bold">
        "Your <span className="text-red-600 font-bold">City</span>, Your{" "}
        <span className="text-green-600 font-bold">Vibe</span>, Your{" "}
        <span className="text-blue-600 font-bold">Events</span> "
      </h2>
      <h3 className="text-xl text-center text-white">
        Find local events you'll love. Attend, connect, and make memories.
      </h3>
      <div className="grid lg:grid-cols-5 gap-5 grid-cols-1 mt-5 mb-5">
        <div className="lg:pl-7">
          <img
            className="w-28 h-28 rounded-full  border-white border-4"
            src="dhaka.jpg"
            alt=""
          />
          <p className="text-white lg:pl-7 font-bold">Dhaka</p>
        </div>
        <div className="lg:pl-7">
          <img
            className="w-28 h-28 rounded-full border-white border-4"
            src="sylhet.jpg"
            alt=""
          />
          <p className="text-white lg:pl-7 font-bold">Sylhet</p>
        </div>
        <div className="lg:pl-7">
          <img
            className="w-28 h-28 rounded-full border-white border-4"
            src="khulna.jpg"
            alt=""
          />
          <p className="text-white lg:pl-7 font-bold">Khulna</p>
        </div>
        <div className="lg:pl-7">
          <img
            className="w-28 h-28 rounded-full border-white border-4"
            src="jhenaidah.jpg"
            alt=""
          />
          <p className="text-white lg:pl-7 font-bold">Jhenaidah</p>
        </div>
        <div className="lg:pl-7">
          <img
            className="w-28 h-28 rounded-full border-white border-4"
            src="rangpur.jpg"
            alt=""
          />
          <p className="text-white lg:pl-7 font-bold">Rangpur</p>
        </div>
      </div>
    </div>
  );
};

export default PopularCity;
