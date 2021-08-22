import React from "react";

const Cards = (props) => (
  <div className="card shadow bg-transparent rounded" style={{ maxWidth: "20rem" }}>
    <img className="card-img-top" src={props.image} alt='card' width='200rem' height='200rem' />
      <div className="card-body">
        <p className="card-title">{props.title}</p>
        <h6 className="card-subtitle mb-2 text-muted">Details</h6>
        <p>{props.details}</p>
      </div>
  </div>
);

export default Cards;
