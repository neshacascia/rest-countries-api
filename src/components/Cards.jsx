import React from 'react';
import { Link } from 'react-router-dom';

export default function Cards(props) {
  return (
    <div className="card">
      <img src={props.img} />

      <div className="text">
        <Link to={`/${props.id}`}>
          <h2>{props.country}</h2>
        </Link>

        <span className="bold">
          Population: <span>{props.population}</span>
        </span>

        <span className="bold">
          Region: <span>{props.region}</span>
        </span>

        <span className="bold">
          Capital: <span>{props.capital}</span>
        </span>
      </div>
    </div>
  );
}
