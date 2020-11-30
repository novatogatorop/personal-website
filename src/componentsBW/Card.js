import React, { Component } from 'react';
import "./Card.css";

function Card({
  img,
  title
}) {
  return (
    <>
      <div className="Card">
        <img src={img} class="card-img" />
        <div class="card-title">{title}</div>
      </div>
    </>
  );
};

export default Card;
