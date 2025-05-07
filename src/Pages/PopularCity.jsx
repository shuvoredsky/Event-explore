import React from "react";

const PopularCity = () => {
  return (
    <div className="lg:h-56 w-[1260px] bg-violet-900 px-15">
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
          <img className="w-28 h-28 rounded-full" src="dhaka.jpg" alt="" />
          <p className="text-white lg:pl-7">Dhaka</p>
        </div>
        <div className="lg:pl-7">
          <img className="w-28 h-28 rounded-full" src="sylhet.jpg" alt="" />
          <p className="text-white lg:pl-7">Sylhet</p>
        </div>
        <div className="lg:pl-7">
          <img className="w-28 h-28 rounded-full" src="khulna.jpg" alt="" />
          <p className="text-white lg:pl-7">Khulna</p>
        </div>
        <div className="lg:pl-7">
          <img className="w-28 h-28 rounded-full" src="jhenaidah.jpg" alt="" />
          <p className="text-white lg:pl-7">Jhenaidah</p>
        </div>
        <div className="lg:pl-7">
          <img className="w-28 h-28 rounded-full" src="rangpur.jpg" alt="" />
          <p className="text-white lg:pl-7">Rangpur</p>
        </div>
      </div>
    </div>
  );
};

export default PopularCity;
