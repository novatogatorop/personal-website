import React, { Component } from 'react';
import Intro from "../../Intro";
import { homeObjOne, homeObjTwo, homeObjThree } from "./Data";

function Contact() {
  return (
    <>
      <Intro {...homeObjOne} />
      <Intro {...homeObjTwo} />
      <Intro {...homeObjThree} />
    </>
  )
};

export default Contact;
