import React from 'react';
import Navbar from '../components/Navbar';
import Searchbar from '../components/Searchbar';
import Cards from '../components/Cards';

export default function CountriesListings(props) {
  const countriesEl = props.countries.map(country => (
    <Cards
      img={country.flag}
      country={country.name}
      population={country.population}
      region={country.region}
      capital={country.capital}
      key={country.numericCode}
      id={country.alpha3Code}
    />
  ));

  return (
    <div className={`homepage ${props.theme ? 'dark' : ''}`}>
      <Navbar theme={props.theme} handleClick={props.handleClick} />
      <Searchbar />

      <main className="countries-listings">{countriesEl}</main>
    </div>
  );
}
