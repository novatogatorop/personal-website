import React, { Component } from "react";
import "./Projects";
import Banner from "../../Banner";
import Intro from "../../Intro";
import {
  projects,
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
} from "./Data";

class Projects extends Component {
  render() {
    return (
      <>
        <Banner {...projects} />
        <div className="Projects">
          <Intro {...projectOne} />
          <Intro {...projectTwo} />
          <Intro {...projectThree} />
          <Intro {...projectFour} />
        </div>
      </>
    );
  }
}

export default Projects;
