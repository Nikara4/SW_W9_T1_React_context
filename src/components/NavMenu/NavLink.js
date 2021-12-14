import { Link } from "react-router-dom";

const NavLink = (props) => {
  const { path, children } = props;
  return (
    <li className="nav--li">
      <Link exact="true" to={path} className="nav--link">
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
