import React from "react";
import "./Banner.css";

function Banner({ title, description }) {
  return (
    <>
      <div class="Banner">
        <h3 className="banner-title">{title}</h3>
        <div className="banner-description">{description}</div>
      </div>
    </>
  );
}

export default Banner;
