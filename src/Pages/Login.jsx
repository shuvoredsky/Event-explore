import React, { use, useRef, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./Firebase-config/firebase-init";

const Login = () => {
  const [error, setError] = useState("");
  const emailRef = useRef();
  const [errorMsg, setErrorMsg] = useState("");
  const { signIn } = use(AuthContext);
  //   const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        alert("Sign in successfully");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setError(error.code);
      });
  };
  const handleForgetPass = () => {
    console.log(emailRef.current.value);
    const email = emailRef.current.value;

    setErrorMsg("");

    // send reset password
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("a password send your email. Please check your email");
      })
      .catch((error) => {
        setErrorMsg(error.message);
      });
  };
  return (
    <div className="bg-slate-200 h-full">
      <div className="flex justify-center mt-7 mb-7 items-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
          <h2 className="text-2xl font-semibold text-center">
            Login your account
          </h2>
          <form onSubmit={handleLogin} className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                name="email"
                ref={emailRef}
                type="email"
                className="input"
                placeholder="Email"
                required
              />
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
                required
              />
              <div onClick={handleForgetPass}>
                <a className="link link-hover">Forgot password?</a>
              </div>

              {error && <p className="text-red-400 text-xs">{error}</p>}

              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>
              <p className="text-center font-semibold pt-5">
                Dont’t Have An Account ?{" "}
                <Link className="text-red-500" to="/register">
                  Register
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
