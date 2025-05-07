import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Profile = () => {
  const { user } = use(AuthContext);
  const { displayName, email, photoURL } = user;
  return (
    <div className="my-5">
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">{displayName}</h2>
          <p>{email}</p>
        </div>
        <figure>
          <img src={photoURL} alt="User" />
        </figure>
      </div>
    </div>
  );
};

export default Profile;
