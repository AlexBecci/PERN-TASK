import { Link, useLocation } from "react-router-dom";

import { publicRoutes, privateRoutes } from "./navigation";
import { useAuth } from "../../context/AuthContext";
import {twMerge} from "tailwind-merge"

function Navbar() {
  const location = useLocation();
  const { isAuth, signout } = useAuth();

  return (
    <nav className="bg-zinc-950 flex justify-between px-20 py-4">
      <Link to={"/"}>
        <h1>Pern stack</h1>
      </Link>
      <ul className="flex  gap-x-2">
        {isAuth
          ?
          <>
          {
           privateRoutes.map(({ path, name }) => (
              <li
                className={` text-slate-300  px-2 py-1 ${
                  location.pathname == path && "bg-sky-700 "
                }`}
                key={path}
              >
                <Link to={path}>{name}</Link>
              </li>
            ))
          }
          <li className="text-slate-300  px-2 py-1 hover:bg-sky-700"
          onClick={() => {
            signout();
          }}
        >
          logout
        </li>
          </>
          
          : publicRoutes.map(({ path, name }) => (
              <li
                className={`text-slate-300  bg-red-500 px-2 py-1 ${
                  location.pathname == path && "bg-sky-700 "
                }`}
                key={path}
              >
                <Link to={path}>{name}</Link>
              </li>
            ))}
        
      </ul>
    </nav>
  );
}

export default Navbar;
