import React, { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import useSignup from "../Hooks/userSignup";

// Email, Fullname, Username, password, confirmpassword, Gender
const Signup = () => {
  const [inputs, setInputs] = useState({
    Email: "",
    Fullname: "",
    Username: "",
    password: "",
    confirmpassword: "",
    Gender: "",
  });

	const {loading, signup} = useSignup()

const handleCheckboxChange = (Gender) => {
	setInputs({...inputs, Gender});
}

 
	const handleSubmit = async(e) => {
		e.preventDefault();
		await signup(inputs)
	}
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-teal-800 bg-clip-padding backdrop-filter backdrop-blur-lg">
        <h1 className="text-3xl font-semibold text-center text-[#EFBC9B]">
          Sign Up <span className="text-white"> Pixel-Pal</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Enter your Email address"
              className="w-full input input-bordered  h-10"
              value={inputs.Email}
              onChange={(e) => setInputs({ ...inputs, Email: e.target.value })}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered  h-10"
              value={inputs.Fullname}
              onChange={(e) =>
                setInputs({ ...inputs, Fullname: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label p-2 ">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="johndoe"
              className="w-full input input-bordered h-10"
              value={inputs.Username}
              onChange={(e) =>
                setInputs({ ...inputs, Username: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
              value={inputs.confirmpassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmpassword: e.target.value })
              }
            />
          </div>

          <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.Gender}/>

          <Link
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
            to="/login"
          >
            Already have an account?
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2 border border-slate-700"
            disabled={loading}>
              {loading? <span className="loading loading-spinner"></span>: "Signup"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
