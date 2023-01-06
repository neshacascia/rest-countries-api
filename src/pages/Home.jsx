import React from 'react';
import Navbar from '../components/Navbar';
import SearchFilter from '../components/SearchFilter';
import Countries from './Countries';

export default function Home(props) {
  return (
    <>
      <Navbar theme={props.theme} handleClick={props.handleClick} />
      <SearchFilter />
      <Countries theme={props.theme} handleClick={props.handleClick} />
    </>
  );
}
