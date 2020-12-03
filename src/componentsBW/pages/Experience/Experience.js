import React, { Component } from 'react';
import Banner from "../../Banner";
import { experience } from "./Data"

class Experience extends Component {
  render() {
    return (
      <>
        <Banner {...experience} />
      </>
    );
  }
}

export default Experience;
