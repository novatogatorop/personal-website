import React from "react";
import "./ProjectDetail.css";
import Button from "./Button";

function ProjectDetail({
  title,
  description,
  linkOneUrl,
  linkOneName,
  or,
  linkTwoUrl,
  linkTwoName,
}) {
  return (
    <>
      <div className="ProjectDetail">
        <div class="project-detail-title">{title}</div>
        <div class="project-detail-description-wrapper">
          <div class="project-detail-description">{description}</div>
          <div class="project-detail-link">
            <a target="_blank" href={linkOneUrl} rel="noreferrer">
              <Button>{linkOneName}</Button>
            </a>
            <div className="project-detail-or">{or}</div>
            <a
              className="project-detail-link-two"
              target="_blank"
              href={linkTwoUrl}
              rel="noreferrer"
            >
              <Button>{linkTwoName}</Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectDetail;
