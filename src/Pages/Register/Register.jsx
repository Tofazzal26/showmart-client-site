import React from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({ name, email, password });
  };

  return (
    <div className="my-[100px]">
      <div className="border-2 lg:w-[800px] mx-auto">
        <div className="p-4 lg:p-10 ">
          <form onSubmit={handleSubmit}>
            <h2 className="text-center text-2xl font-semibold">Register</h2>
            <div>
              <label className="font-semibold">Name</label>
              <br />
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full mt-2"
                name="name"
                required
              />
            </div>
            <div className="my-2">
              <label className="font-semibold">Email</label>
              <br />
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full mt-2"
                name="email"
                required
              />
            </div>
            <div>
              <label className="font-semibold">Password</label>
              <br />
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full mt-2"
                name="password"
                required
              />
            </div>

            <div className="mt-4">
              <button className="w-full bg-[#2d4d95] text-white rounded-md font-semibold py-2">
                Register
              </button>
            </div>
            <h2 className="text-center my-4 font-semibold">
              Already have an account ?{" "}
              <NavLink to="/login" className="text-[#2d4d95]">
                Login
              </NavLink>
            </h2>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
