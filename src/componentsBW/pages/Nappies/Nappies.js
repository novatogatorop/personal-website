import React, { Component } from 'react';
import Banner from "../../Banner";
import { nappies } from "./Data";

class Nappies extends Component {
  render() {
    return (
      <>
        <Banner {...nappies} />
      </>
    );
  }
}

export default Nappies;
