import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

export default function Navbar(props) {
  return (
    <nav>
      <Link to="/">
        <h1>Where in the world?</h1>
      </Link>

      <div className="toggle-theme" onClick={props.handleClick}>
        {props.theme ? (
          <FontAwesomeIcon icon={faSun} />
        ) : (
          <FontAwesomeIcon icon={faMoon} />
        )}
        <span>{props.theme ? 'Light' : 'Dark'} Mode</span>
      </div>
    </nav>
  );
}
