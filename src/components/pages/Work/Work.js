import React, { Component } from 'react';
import Intro from "../../Intro";
import { homeObjOne, homeObjTwo, homeObjThree } from "./Data";

function Work() {
  return (
    <>
      <Intro {...homeObjTwo} />
    </>
  )
};

export default Work;
