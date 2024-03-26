import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../Hooks/useLogin";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {loading, login} = useLogin();

  const handleSubmit = async(e)=> {
    e.preventDefault();
    await login(email, password)
  }
  return (
    <div className="text-black flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-teal-800 bg-clip-padding backdrop-filter backdrop-blur-lg">
        <h1 className="text-2xl font-serif text-center text-[#EFBC9B]">
          {" "}
          Login
          <span className="text-white"> Pixel-Pal</span>
        </h1>


        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Email"
              className="w-full input input-bordered h-10 text-white"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Password"
              className="w-full input input-bordered h-10 text-white"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
            />
          </div>
          <Link
            to="/signup"
            className="text-sm hover:underline hover:text-blue-600 mt-4 inline-block text-white"
          >
            {"Don't"} have an account?
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-4" disabled={loading}>
              {loading?<span className="loading loading-spinner"></span> : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
