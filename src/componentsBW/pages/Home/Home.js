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
        <div className="Home">
          <h1 className="home-desc">
            Nova Togatorop — is a Full Stack Developer based in Berlin.
          </h1>
          <h1 className="home-desc">
            I'm currently learning React and reading a book in my spare time.
          </h1>
          <h1 className="home-desc">
            I'm a product minded developer who like to think and act as a user. Trigger to create a clear and clean design and also try to make conscious decisions to solve real-world problems.
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
            <a target="_blank" href="images/resume.pdf">
              <Button>DOWNLOAD RESUME</Button>
            </a>
            <a target="_blank" href="mailto:nova@roadbeats.com">
              <Button>EMAIL ME</Button>
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
