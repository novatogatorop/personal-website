import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaRainbow} from'react-icons/fa';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="navbar">
      <div className="navbar-container container">
        <Link to="/" className="navvbar-logo">
          <FaRainbow className="navbar-icon" /> Nova Togatorop <FaRainbow className="navbar-icon" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link className="nav-item">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-item">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-item">
              Projects
            </Link>
          </li>
          <li className="nav-btn">
            {button ?(
              <Link path="/sign-up" className="btn-link">
                <Button buttonStyle="btn--outline"> SIGN UP></Button>
              </Link>
              ) : (
              <Link path="/sign-up" className="btn-link">
                <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                  SIGN UP
                </Button>
              </Link>
              )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
