import { NavLink } from "react-router-dom";
import logo from "../../../public/budgeting.png";
import profile from "../../../public/profile.png";

const Header = () => {
  const navLinks = (
    <>
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
            Services
          </NavLink>
        </a>
      </li>
      <li>
        <a>
          <NavLink
            to="/business"
            className={({ isActive }) =>
              isActive
                ? "text-orange-300"
                : "text-white hover:text-orange-300 hover:ease-in-out transition-all"
            }
          >
            Business
          </NavLink>
        </a>
      </li>
      <li>
        <a>
          <NavLink
            to="/helpdesk"
            className={({ isActive }) =>
              isActive
                ? "text-orange-300"
                : "text-white hover:text-orange-300 hover:ease-in-out transition-all"
            }
          >
            Helpdesk
          </NavLink>
        </a>
      </li>
    </>
  );

  return (
    <div className="bg-[#162649] text-white">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          <a className="btn btn-ghost flex items-center text-2xl">
            <img src={logo} width={45} alt="" /> Financity
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal font-semibold px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <button className="bg-orange-300 px-4 text-[14px] py-2 text-black font-semibold rounded-md">
            <NavLink to="/">Login</NavLink>
          </button>
          <div className="avatar hidden">
            <div className="ring-blue ring-offset-blue-400 w-[35px] rounded-full ring ring-offset-2">
              <img src={profile} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
