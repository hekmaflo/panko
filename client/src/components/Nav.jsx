import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="navbar">
      <h4>Panko</h4>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
