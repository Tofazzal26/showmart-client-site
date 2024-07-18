import React from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const mobile = e.target.mobile.value;
    const pin = e.target.pin.value;
    const role = e.target.role.value;
  };

  return (
    <div className="my-12">
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
                className="input input-bordered w-full"
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
                className="input input-bordered w-full"
                name="email"
                required
              />
            </div>
            <div>
              <label className="font-semibold">Mobile</label>
              <br />
              <input
                type="number"
                placeholder="Number"
                className="input input-bordered w-full"
                name="mobile"
                required
              />
            </div>
            <div className="mt-2 mb-4">
              <label className="font-semibold">Pin</label>
              <br />
              <input
                type="number"
                placeholder="Pin Number"
                className="input input-bordered w-full"
                name="pin"
                required
              />
              <label className="font-semibold">Role</label>
              <select
                name="role"
                className="select select-bordered font-semibold w-full"
              >
                <option value="user" className="font-semibold">
                  User
                </option>
                <option value="agent" className="font-semibold">
                  Agent
                </option>
              </select>
            </div>
            <button className="w-full bg-[#2d4d95] text-white rounded-md font-semibold py-2">
              Register
            </button>
            <h2 className="text-center my-4 font-semibold">
              Already have an account ?{" "}
              <NavLink to="/" className="text-[#2d4d95]">
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
