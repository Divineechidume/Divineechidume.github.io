import React, { useState } from "react";
import "./Navbar.css";
import { MenuItems } from "./MenuItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Divinee Chidume
        </Link>
        <div className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <ul className={showMenu ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.url} className={item.cName}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
