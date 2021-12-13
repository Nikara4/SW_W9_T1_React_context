import { FaHome, FaArrowLeft, FaChessRook, FaFilm } from "react-icons/fa";
import NavLink from "./NavLink";

const NavDesktop = () => {
  return (
    <nav className="nav">
      <ul className="nav--ul">
        <NavLink path="/main">
          <FaHome className="nav--icon__desktop" />
          home
        </NavLink>
        <NavLink path="/places">
          <FaChessRook className="nav--icon__desktop" />
          places
        </NavLink>
        <NavLink path="/movies">
          <FaFilm className="nav--icon__desktop" />
          movies
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavDesktop;
