import Desktop from "./Desktop";
import Mobile from "./Mobile";
import useMobile from "./../../utils/useMobile";

const NavMenu = () => {
  const isMobile = useMobile();

  return (
    <nav className="nav">
      <ul className="nav--ul">{isMobile ? <Mobile /> : <Desktop />}</ul>
    </nav>
  );
};

export default NavMenu;
