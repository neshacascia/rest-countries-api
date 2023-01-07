import React, { useContext, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Context } from './Context';

export default function SearchFilter(props) {
  const countrySearchValue = useRef();
  const countryFilterValue = useRef();

  const { setCountries } = useContext(Context);

  async function handleSearch() {
    const searchValue = countrySearchValue.current.value;

    if (searchValue) {
      try {
        const response = await fetch(
          `https://restcountries.com/v2/name/${searchValue}`
        );
        const data = await response.json();
        setCountries(data);
      } catch (err) {
        console.error(err);
      }
    } else if (searchValue === '') {
      try {
        const response = await fetch('https://restcountries.com/v2/all');
        const data = await response.json();
        setCountries(data);
      } catch (err) {
        console.error(err);
      }
    }
  }

  async function handleFilter() {
    const filterValue = countryFilterValue.current.value;

    if (filterValue === 'All') {
      try {
        const response = await fetch('https://restcountries.com/v2/all');
        const data = await response.json();
        setCountries(data);
      } catch (err) {
        console.error(err);
      }
    } else {
      try {
        const res = await fetch(
          `https://restcountries.com/v2/region/${filterValue}`
        );
        const data = await res.json();
        setCountries(data);
      } catch (err) {
        console.error(err);
      }
    }
  }

  return (
    <>
      <form>
        <div className="searchbar">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            type="text"
            placeholder="Search for a country..."
            name="searchText"
            ref={countrySearchValue}
            onChange={() => handleSearch()}
          />
        </div>

        <select
          id="region"
          name="region"
          ref={countryFilterValue}
          onChange={() => handleFilter()}
        >
          <option value="All">Filter By Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </form>
    </>
  );
}
