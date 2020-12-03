import React, { Component } from 'react';
import "./Nappies.css"
import Banner from "../../Banner";
import ProjectDetail from "../../ProjectDetail";
import {
  nappies,
  links,
  technologies,
  overview,
  functionality,
  frontend,
  backend,
  deployment,
  blank } from "./Data";

class Nappies extends Component {
  render() {
    return (
      <>
        <Banner {...nappies} />
        <div className="nappies-heading">
          <ProjectDetail {...links} />
          <ProjectDetail {...technologies} />
        </div>
        <ProjectDetail {...overview} />
        <ProjectDetail {...functionality} />
        <ProjectDetail {...frontend} />
        <ProjectDetail {...backend} />
        <ProjectDetail {...deployment} />
        <ProjectDetail {...blank} />
      </>
    );
  }
}

export default Nappies;
