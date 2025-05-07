import React from "react";

const ReserveSeat = () => {
  const handleReserveSeat = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    console.log(name, email);
    if ((name, email)) {
      alert("Seat Reserve Successfully");
    }
  };
  return (
    <div className="my-5">
      <h2>Reserve a Seat</h2>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleReserveSeat} className="fieldset">
            <label className="label">Name</label>
            <input
              required
              name="name"
              type="text"
              className="input"
              placeholder="Name"
            />
            <label className="label">Email</label>
            <input
              required
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />

            <button type="submit" className="btn btn-neutral mt-4">
              Reserve Seat
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReserveSeat;
