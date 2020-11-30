import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavbarItems } from "./NavbarItems";
import "./Navbar.css";
import { Button} from "../Button";

class Navbar extends Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  };


  render() {
    return (
      <>
        <nav className="Navbar">
          <Link to="/" className="nav-logo">
          Nova Togatorop
          </Link>
          <div className="nav-menu-mobile" onClick={this.handleClick}>
            <i className={this.state.clicked ? "fa fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {NavbarItems.map((item, index) => {
              return (
                <li className={item.cName}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </>
    );
  }
}

export default Navbar;
