import React, { Component } from "react";
import "./Experience.css";
import Banner from "../../Banner";
import { experience, experiences } from "./Data";

class Experience extends Component {
  render() {
    return (
      <>
        <Banner {...experience} />
        {experiences.map((e) => {
          return (
            <div key={e.id} className="experience-list">
              <div className="listHeading">
                <div className="title">{e.title}</div>
                <div className="company">
                  - {e.company}, {e.city}
                </div>
              </div>
              <div className="period">{e.period}</div>
              <div className="description">{e.description}</div>
            </div>
          );
        })}
      </>
    );
  }
}

export default Experience;
