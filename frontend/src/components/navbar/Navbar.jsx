import { Link, useLocation } from "react-router-dom";

import { navigation } from "./navigation";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-zinc-950 flex justify-between px-20 py-4">
      <Link to={'/'}>
        <h1>Pern stack</h1>
      </Link>
      <ul className="flex  gap-x-2">
        {navigation.map(({ path, name }) => (
          <li
            className={` text-slate-300  px-2 py-1 ${
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
