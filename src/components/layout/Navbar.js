import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} />
        {title}
      </h1>
      <ul>
        <li>
          <Link to="/" alt="">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" alt="">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github my"
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
