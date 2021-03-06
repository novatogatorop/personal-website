import React, { Component } from 'react';
import Intro from "../../Intro";
import { homeObjOne, homeObjTwo, homeObjThree } from "./Data";

function Home() {
  return (
    <>
      <Intro {...homeObjOne} />
      <Intro {...homeObjTwo} />
      <Intro {...homeObjThree} />
    </>
  )
};

export default Home;
