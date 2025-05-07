import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../Pages/Firebase-config/firebase-init";
import PopularCity from "../Pages/PopularCity";

const Profile = () => {
  const { user } = use(AuthContext);
  const { displayName, email, photoURL } = user;

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const updatePhoto = form.photo.value;
    console.log(name, updatePhoto);

    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        alert("update profile successfully");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

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
      {/* update profile */}
      <div>
        <form
          onSubmit={handleUpdateProfile}
          className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
        >
          <legend className="fieldset-legend">Update Profile</legend>

          <label className="label">Name</label>
          <input name="name" type="text" className="input" placeholder="Name" />

          <label className="label">Photo URL</label>
          <input
            name="photo"
            type="text"
            className="input"
            placeholder="PhotoURL"
          />

          <button type="submit" className="btn btn-neutral mt-4">
            Update Profile
          </button>
        </form>
      </div>
      <div className="my-5">
        <PopularCity></PopularCity>
      </div>
    </div>
  );
};

export default Profile;
