import React, { Component } from 'react';
import Banner from "../../Banner";
import { story } from "./Data"

class Story extends Component {
  render() {
    return (
      <>
        <Banner {...story} />
      </>
    );
  }
}

export default Story;
