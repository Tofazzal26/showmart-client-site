import { NavLink } from "react-router-dom";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email_number = e.target.number_email.value;
    const pin = e.target.pin.value;
    console.log({ email_number, pin });
  };

  return (
    <div className="mt-12">
      <div className="border-2 lg:w-[800px] mx-auto">
        <div className="p-4 lg:p-10 ">
          <form onSubmit={handleSubmit}>
            <h2 className="text-center text-2xl font-semibold">Login</h2>
            <div>
              <label className="font-semibold">Mobile</label>
              <br />
              <input
                type="text"
                placeholder="Number/Email"
                className="input input-bordered w-full"
                name="number_email"
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
            </div>
            <button className="w-full bg-[#2d4d95] text-white rounded-md font-semibold py-2">
              Login
            </button>
            <h2 className="text-center my-4 font-semibold">
              Do not Have An Account ?{" "}
              <NavLink to="/register" className="text-[#2d4d95]">
                Register
              </NavLink>
            </h2>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
