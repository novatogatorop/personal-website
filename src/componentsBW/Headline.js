import React from "react";
import "./Headline.css";

function Headline({ title, description }) {
  return (
    <>
      <div class="Headline">
        <div className="headline-box">
          <div className="headline-info">{title}</div>
        </div>
        <div className="description">{description}</div>
      </div>
    </>
  );
}
export default Headline;
