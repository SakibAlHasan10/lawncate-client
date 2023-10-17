import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link to={"/"}>
            <img
              src="https://kitpro.site/lawncare/wp-content/uploads/sites/193/2023/10/Logo-Lawncare-2-01-1024x238.png"
              alt=""
              className=" h-10"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to={`/`}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "active text-green-500"
                    : isPending
                    ? "pending"
                    : ""
                }
              >
                <a className=" hover:text-green-500">Home</a>
              </NavLink>
            </li>
            <li tabIndex={0} >
              
                <details >
                  <summary className="hover:text-green-500">About Us</summary>
                  <ul className="p-2">
                    <li>
                      <NavLink
                        to={`/about`}
                        className={({ isActive, isPending }) =>
                          isActive
                            ? "active text-green-500"
                            : isPending
                            ? "pending"
                            : ""
                        }
                      >
                        <a className=" hover:text-green-500">About Us</a>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={`/team`}
                        className={({ isActive, isPending }) =>
                          isActive
                            ? "active text-green-500"
                            : isPending
                            ? "pending"
                            : ""
                        }
                      >
                        <a className=" hover:text-green-500">Team</a>
                      </NavLink>
                    </li>
                  </ul>
                </details>
            </li>
            <li>
              <NavLink
                to={`/contact`}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "active text-green-500"
                    : isPending
                    ? "pending"
                    : ""
                }
              >
                <a className="btn-sm hover:text-green-500">Contact Us</a>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <NavLink
            to={`/sign_in`}
            className={({ isActive, isPending }) =>
              isActive ? "active text-green-500" : isPending ? "pending" : ""
            }
          >
            <a className="btn-sm hover:text-green-500">SignIn</a>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
