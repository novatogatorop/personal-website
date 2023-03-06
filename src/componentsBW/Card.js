import React from "react";
import "./Card.css";

function Card({ img, title, alt }) {
  return (
    <>
      <div className="Card">
        <img alt={img} src={img} class="card-img" />
        <div class="card-title">{title}</div>
      </div>
    </>
  );
}

export default Card;
