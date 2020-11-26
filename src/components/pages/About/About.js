import React, { Component } from 'react';
import Intro from "../../Intro";
import { homeObjOne } from "./Data";

function About() {
  return (
    <>
      <Intro {...homeObjOne} />
    </>
  )
};

export default About;
