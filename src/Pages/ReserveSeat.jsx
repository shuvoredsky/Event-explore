import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReserveSeat = () => {
  const handleReserveSeat = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;

    if (name && email) {
      toast.success("🎉 Seat Reserved Successfully!", {
        position: "top-right",
        autoClose: 3000,
        pauseOnHover: true,
        theme: "colored",
      });
      e.target.reset();
    }
  };

  return (
    <div className="my-10 flex justify-center">
      <div className="w-full max-w-md bg-violet-100 rounded-2xl shadow-xl p-6 border border-violet-300">
        <h2 className="text-2xl font-bold text-violet-700 mb-4 text-center">
          🎟 Reserve a Seat
        </h2>
        <form onSubmit={handleReserveSeat} className="space-y-4">
          <div>
            <label className="label text-gray-500 font-semibold">Name</label>
            <input
              required
              name="name"
              type="text"
              className="input input-bordered w-full border-violet-300 focus:border-violet-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="label text-gray-500 font-semibold">Email</label>
            <input
              required
              name="email"
              type="email"
              className="input input-bordered w-full border-violet-300 focus:border-violet-500"
              placeholder="your@email.com"
            />
          </div>
          <button
            type="submit"
            className="btn bg-violet-600 hover:bg-violet-700 text-white w-full"
          >
            Reserve Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReserveSeat;
