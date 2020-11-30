import React, { Component } from 'react';
import "./Footer.css"
import Button from "../../Button";

class Footer extends Component {
  render() {
    return (
      <>
        <div className="Footer">
          <a target="_blank" href="https://www.linkedin.com/in/nova-togatorop-26823153/">
            <Button>LINKEDIN</Button>
          </a>
          <div className="slash">/</div>
          <a target="_blank" href="https://github.com/novatogatorop">
            <Button>GITHUB</Button>
          </a>
        </div>
      </>
    );
  }
}

export  default Footer;
