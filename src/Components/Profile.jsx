import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../Pages/Firebase-config/firebase-init";

const Profile = () => {
  const { user } = use(AuthContext);
  const { displayName, email, photoURL } = user;

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const updatePhoto = form.photo.value;

    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: updatePhoto,
    })
      .then(() => {
        alert("Profile updated successfully!");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 items-center justify-center min-h-screen bg-violet-600 px-4">
      {/* Glassy Profile Card */}
      <div className="backdrop-blur-md bg-white/10 border border-white/30 shadow-2xl rounded-2xl p-6 w-full max-w-md text-center text-white">
        <img
          src={photoURL}
          alt="Profile"
          className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-violet-400"
        />
        <h2 className="text-2xl font-bold">{displayName}</h2>
        <p className="text-sm text-violet-200">{email}</p>
      </div>

      {/* Glassy Update Form */}
      <form
        onSubmit={handleUpdateProfile}
        className="backdrop-blur-md bg-white/10 border border-white/30 shadow-2xl rounded-2xl p-6 w-full max-w-md text-white"
      >
        <h3 className="text-xl font-semibold mb-4">Update Profile</h3>

        <div className="mb-4">
          <label className="block mb-1 text-sm text-violet-100">Name</label>
          <input
            name="name"
            type="text"
            placeholder="New name"
            className="w-full px-4 py-2 border border-white/20 bg-white/10 text-white placeholder-violet-200 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm text-violet-100">
            Photo URL
          </label>
          <input
            name="photo"
            type="text"
            placeholder="New photo URL"
            className="w-full px-4 py-2 border border-white/20 bg-white/10 text-white placeholder-violet-200 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-violet-600 hover:bg-violet-700 text-white py-2 rounded-md transition"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
