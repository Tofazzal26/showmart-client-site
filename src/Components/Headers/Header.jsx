import logo from "../../../public/budgeting.png";

const Header = () => {
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Campaigns</a>
              </li>
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>Business</a>
              </li>
              <li>
                <a>Helpdesk</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost flex items-center text-2xl">
            <img src={logo} width={45} alt="" /> Financity
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal font-semibold px-1">
            <li>
              <a>Campaigns</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Business</a>
            </li>
            <li>
              <a>Helpdesk</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="avatar">
            <div className="ring-blue ring-offset-blue-400 w-12 rounded-full ring ring-offset-2">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
