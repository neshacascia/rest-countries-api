import React from 'react';
import { Link } from 'react-router-dom';

export default function Cards({ country }) {
  return (
    <div className="card">
      <img src={country.flag} />

      <div className="text">
        <Link to={`/${country.alpha3Code}`}>
          <h2>{country.name}</h2>
        </Link>

        <span className="bold">
          Population: <span>{country.population.toLocaleString()}</span>
        </span>

        <span className="bold">
          Region: <span>{country.region}</span>
        </span>

        <span className="bold">
          Capital:{' '}
          <span>{country.capital ? country.capital : 'No Capital'}</span>
        </span>
      </div>
    </div>
  );
}
