import React from 'react';
import { Link } from 'react-router-dom';
import "./ProjectDetail.css";

function ProjectDetail({
  title,
  description,
  desc1,
  desc2,
  desc3
}) {
  return (
    <>
      <div className="ProjectDetail">
        <div class="project-detail-title">{title}</div>
        <div class="project-detail-description">
          <div class="desc1">{desc1}</div>
          <div class="desc2">{desc2}</div>
          <div class="desc3">{desc3}</div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
