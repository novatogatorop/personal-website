import React, { Component } from "react";
import "./Footer.css";
import Button from "../../Button";

class Footer extends Component {
  render() {
    return (
      <>
        <div className="Footer">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/nova-togatorop-26823153/"
            rel="noreferrer"
          >
            <Button>LINKEDIN</Button>
          </a>
          <div className="slash">/</div>
          <a
            target="_blank"
            href="https://github.com/novatogatorop"
            rel="noreferrer"
          >
            <Button>GITHUB</Button>
          </a>
          <div className="slash">/</div>
          <a target="_blank" href="images/resume.pdf" rel="noreferrer">
            <Button>RESUME</Button>
          </a>
          <div className="slash">/</div>
          <a
            target="_blank"
            href="mailto:thesupernovaworld@gmail.com.com"
            rel="noreferrer"
          >
            <Button>EMAIL ME</Button>
          </a>
        </div>
      </>
    );
  }
}

export default Footer;
