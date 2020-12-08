import React, { Component } from 'react';
import "./Home.css";
import Button from "../../Button";
import Headline from "../../Headline";
import Card from "../../Card";
import {
  technologies,
  rails,
  javascript,
  bootstrap,
  figma,
  github,
  heroku,
  postgresql,
  react,
  swift,
  webpack } from "./Data";

class Home extends Component {
  render() {
    return (
      <>
        <h1 className="home-desc">
          Nova Togatorop — is a Full Stack Developer based in Berlin.
        </h1>
        <h1 className="home-desc">
          I'm currently learning React and reading a book in my spare time.
        </h1>
        <h1 className="home-desc">
          I'm open for collaborations. If you’re interested in discussing a project, making something great together, or simply getting in touch, email me.
        </h1>
        <Headline {...technologies} />
        <div class="card">
          <Card {...rails} />
          <Card {...postgresql} />
          <Card {...javascript} />
          <Card {...react} />
          <Card {...swift} />
          <Card {...bootstrap} />
          <Card {...figma} />
          <Card {...github} />
          <Card {...heroku} />
          <Card {...webpack} />
        </div>
        <div class="info">
        </div>
      </>
    );
  }
}

export default Home;
