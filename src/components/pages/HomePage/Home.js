import React, { Component } from 'react';
import Intro from "../../Intro"
import { homeObjOne } from "./Data"

function Home() {
  return (
    <Intro {...homeObjOne} />
  );
};

export default Home;
