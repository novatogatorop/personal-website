import React, { Component } from 'react';
import Banner from "../../Banner";
import { contact } from "./Data"

class Contact extends Component {
  render() {
    return (
      <>
        <Banner {...contact} />
      </>
    );
  }
}

export default Contact;
