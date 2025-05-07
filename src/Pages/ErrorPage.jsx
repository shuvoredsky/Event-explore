import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div>
      <div className="flex flex-col justify-center">
        <div>
          <img className="w-[400px] mx-auto" src="Error.jpg" alt="" />
        </div>
        <h1 className="text-3xl font-bold text-center pt-3">
          404 - Page Not Found
        </h1>
        <h2 className="text-center pt-3">
          Oops! The page you're looking for doesn't exist,
        </h2>
        <Link className="text-center" to="/">
          <button className="btn text-xl bg-blue-600 text-white lg:w-[400px] lg:h-12 mt-3">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
