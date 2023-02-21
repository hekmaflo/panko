import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="Navbar">
      <div>
        <NavLink className="Navlink" to="/">
          HOME
        </NavLink>
        <Link className="Navlink" to="/about">
          ABOUT
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
