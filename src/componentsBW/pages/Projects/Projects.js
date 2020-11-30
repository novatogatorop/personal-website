import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Projects"
import {
  projects,
  projectOne,
  projectTwo,
  projectThree,
  projectFour } from "./Data";
import Banner from "../../Banner";
import Intro from "../../Intro";

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
