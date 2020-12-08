import React, { Component } from 'react';
import Banner from "../../Banner";
import ProjectDetail from "../../ProjectDetail";
import {
  story,
  article } from "./Data"

class Story extends Component {
  render() {
    return (
      <>
        <Banner {...story} />
        <ProjectDetail {...article} />
      </>
    );
  }
}

export default Story;
