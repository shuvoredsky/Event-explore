import React from "react";

const PopularCity = () => {
  return (
    <div className="h-56 w-full bg-violet-900 px-15">
      <h2 className="text-center text-3xl text-gray-300 font-bold">
        "Your <span className="text-red-600 font-bold">City</span>, Your{" "}
        <span className="text-green-600 font-bold">Vibe</span>, Your{" "}
        <span className="text-blue-600 font-bold">Events</span> "
      </h2>
      <h3 className="text-xl text-center text-sky-500">
        Find local events you'll love. Attend, connect, and make memories.
      </h3>
      <div className="grid lg:grid-cols-5 gap-5 grid-cols-1 mt-5 mb-5">
        <div>
          <img className="w-40 rounded-full" src="dhaka.jpg" alt="" />
          <p className="text-white pl-14">Dhaka</p>
        </div>
        <div>
          <img className="w-44 rounded-full" src="sylhet.jpg" alt="" />
          <p className="text-white pl-14">Sylhet</p>
        </div>
        <div>
          <img className="w-40 rounded-full" src="khulna.jpg" alt="" />
          <p className="text-white pl-14">Khulna</p>
        </div>
        <div>
          <img className="w-40 rounded-full" src="jhenaidah.jpg" alt="" />
          <p className="text-white pl-11">Jhenaidah</p>
        </div>
        <div>
          <img className="w-40 rounded-full" src="rangpur.jpg" alt="" />
          <p className="text-white pl-14">Rangpur</p>
        </div>
      </div>
    </div>
  );
};

export default PopularCity;
