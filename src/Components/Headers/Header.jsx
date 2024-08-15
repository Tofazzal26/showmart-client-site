import { NavLink } from "react-router-dom";
import logo from "../../../public/convenience.png";
import profile from "../../../public/profile.png";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Header = () => {
  const { user, userSignOut } = useContext(AuthContext);

  const handleLogOut = () => {
    userSignOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navLinks = (
    <>
      <li>
        <a>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-orange-300"
                : "text-white hover:text-orange-300 hover:ease-in-out transition-all"
            }
          >
            Home
          </NavLink>
        </a>
      </li>
      <li>
        <a>
          <NavLink
            to="/showCase"
            className={({ isActive }) =>
              isActive
                ? "text-orange-300"
                : "text-white hover:text-orange-300 hover:ease-in-out transition-all"
            }
          >
            Showcase
          </NavLink>
        </a>
      </li>
      <li>
        <a>
          <NavLink
            to="/service"
            className={({ isActive }) =>
              isActive
                ? "text-orange-300"
                : "text-white hover:text-orange-300 hover:ease-in-out transition-all"
            }
          >
            Service
          </NavLink>
        </a>
      </li>
      <li>
        <a>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-orange-300"
                : "text-white hover:text-orange-300 hover:ease-in-out transition-all"
            }
          >
            About
          </NavLink>
        </a>
      </li>
    </>
  );

  return (
    <div className="fixed w-full top-0 z-50">
      <div className="bg-[#162649] text-white">
        <div className="navbar container mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-[#162649] text-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navLinks}
              </ul>
            </div>
            <a className="btn btn-ghost flex items-center text-lg lg:text-2xl">
              <img src={logo} width={45} alt="" /> ShowMart
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal text-[18px] font-semibold px-1">
              {navLinks}
            </ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <div className="flex gap-4 items-center">
                <div
                  className="tooltip tooltip-left font-semibold cursor-pointer tooltip-accent"
                  data-tip={user?.displayName}
                >
                  <div className="avatar">
                    <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                      <img src={profile} />
                    </div>
                  </div>
                </div>
                <button onClick={handleLogOut} className="font-semibold">
                  Logout
                </button>
              </div>
            ) : (
              <button className="bg-orange-300 px-4 text-[14px] py-2 text-black font-semibold rounded-md">
                <NavLink to="/login">Login</NavLink>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
