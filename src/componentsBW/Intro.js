import React from 'react';
import { Link } from 'react-router-dom';
import "./Intro.css";
import Button from "./Button";

function Intro({
  headline,
  topLine,
  visit,
  webAppName,
  webUrl,
  iosAppName,
  iosUrl,
  or,
  description,
  detailPath,
  detailName,
  githubName,
  githubUrl,
  img,
  alt,
  imgStart
}) {
  return (
    <>
        <div className="Intro">
          <div className="row intro-row"
          style={{display: 'flex', flexDirection: imgStart === "start" ? "row-reverse" : "row"}}
          >
            <div className="intro-col">
              <div className="intro-text-wrapper">
                <h2 className="intro-headline">{headline}</h2>
                <div className="intro-top-line">{topLine}</div>
                <div className="intro-visit">{visit}
                  <a target="_blank" href={webUrl}>
                    <Button buttonStyle="btn--plain">
                      {webAppName}
                    </Button>
                  </a>
                  <div className="intro-or">{or}</div>
                  <a target="_blank" href={iosUrl}>
                  <Button buttonStyle="btn--plain">
                      {iosAppName}
                    </Button>
                  </a>
                </div>
                <p className="intro-description">{description}</p>
                <Link to={detailPath}>
                  <Button>
                    {detailName}
                  </Button>
                </Link>
                <a className="github" target="_blank" href={githubUrl}>
                  <Button>
                    {githubName}
                  </Button>
                </a>
              </div>
            </div>
            <div className="intro-col">
              <div class="intro-img-wrapper">
                <img src={img} alt={alt} class="intro-img" />
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Intro;
