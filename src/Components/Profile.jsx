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
    <div className="flex flex-col md:flex-row gap-8 items-center justify-center min-h-screen bg-gray-100 px-4">
      {/* Profile Card */}
      <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-md text-center">
        <img
          src={photoURL}
          alt="Profile"
          className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-violet-500"
        />
        <h2 className="text-2xl font-bold text-gray-800">{displayName}</h2>
        <p className="text-gray-600">{email}</p>
      </div>

      {/* Update Form */}
      <form
        onSubmit={handleUpdateProfile}
        className="bg-white shadow-xl rounded-lg p-6 w-full max-w-md"
      >
        <h3 className="text-xl font-semibold mb-4 text-gray-800">
          Update Profile
        </h3>

        <div className="mb-4">
          <label className="block mb-1 text-gray-600">Name</label>
          <input
            name="name"
            type="text"
            placeholder="New name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-gray-600">Photo URL</label>
          <input
            name="photo"
            type="text"
            placeholder="New photo URL"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-violet-600 text-white py-2 rounded-md hover:bg-violet-700 transition"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
