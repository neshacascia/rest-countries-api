import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import CountriesListings from './pages/CountriesListings';
import CountryDetails from './pages/CountryDetails';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggle() {
    setIsDarkMode(prevState => !prevState);
  }

  // const [formData, setFormData] = useState({
  //   country: '',
  //   region: '',
  // });

  // function handleChange(e) {
  //   setFormData(prevFormData => {
  //     return {
  //       ...prevFormData,
  //       [e.target.name]: e.target.value,
  //     };
  //   });
  // }

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(data => setCountries(data));
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <CountriesListings
              countries={countries}
              theme={isDarkMode}
              handleClick={toggle}
            />
          }
        ></Route>

        <Route
          path="/:countryId"
          element={
            <CountryDetails
              theme={isDarkMode}
              countries={countries}
              handleClick={toggle}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
