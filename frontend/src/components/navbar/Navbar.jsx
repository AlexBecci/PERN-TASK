import { Link, useLocation } from "react-router-dom";

import { publicRoutes, privateRoutes } from "./navigation";
import { useAuth } from "../../context/AuthContext";
import { BiLogOut } from "react-icons/bi";

function Navbar() {
  const location = useLocation();

  const { isAuth, signout } = useAuth();

  return (
    <nav className=" flex justify-between px-8 sm:px-20 py-4">
      <Link to={"/"}>
        <h1 className="text-xl sm:text-3xl">PrioList</h1>
      </Link>
      <ul className="flex  gap-x-2">
        {isAuth ? (
          <>
            {privateRoutes.map(({ path, name, icon }) => (
              <li
                className={` text-slate-300 border-2 rounded-full hover:underline   border-slate-200 px-2 sm:px-4 py-1 ${
                  location.pathname == path && "bg-sky-700 "
                }`}
                key={path}
              >
                <Link className="flex items-center" to={path}>
                  {icon}

                  <span className="hidden sm:block">{name}</span>
                </Link>
              </li>
            ))}
            <li
              className="text-slate-300  flex items-center border-2 rounded-full hover:underline  border-slate-200 px-2 sm:px-4 file:px-2 py-1 hover:bg-red-700"
              onClick={() => {
                signout();
              }}
            >
              <BiLogOut />
             <h1 className="hidden sm:block">Logout</h1> 
            </li>
          </>
        ) : (
          publicRoutes.map(({ path, name }) => (
            <li
              className={`text-sm sm:text-base text-slate-100 border-2 border-opacity-20 rounded-full hover:underline  border-slate-200 px-2 sm:px-4 py-1 ${
                location.pathname == path && "bg-sky-700 "
              }`}
              key={path}
            >
              <Link to={path}>{name}</Link>
            </li>
          ))
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
