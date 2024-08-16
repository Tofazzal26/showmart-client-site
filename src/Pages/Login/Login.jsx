import { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from || "/";

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((result) => {
        console.log(result);
        navigate(from);
        toast.success("Login Success");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Please Valid Email And Password");
      });
  };

  return (
    <div className="mt-[100px]">
      <div className="border-2 lg:w-[800px] mx-auto">
        <div className="p-4 lg:p-10 ">
          <form onSubmit={handleSubmit}>
            <h2 className="text-center text-2xl font-semibold">Login</h2>
            <div>
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
            <div className="mt-2 mb-4">
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
            <button className="w-full bg-[#2d4d95] text-white rounded-md font-semibold py-2">
              Login
            </button>
            <h2 className="text-center my-4 font-semibold">
              Do not Have An Account ?{" "}
              <NavLink to="/register" className="text-[#2d4d95]">
                Login
              </NavLink>
            </h2>
          </form>
          <div className="flex justify-center items-center">
            <button
              onClick={handleGoogleLogin}
              className="flex items-center font-semibold border-2 py-2 rounded-full px-4 text-[14px] gap-2"
            >
              <FcGoogle size={25} /> Continue Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
