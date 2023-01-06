import { useState, useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Context } from './components/Context';
import Home from './pages/Home';
import CountryInfo from './pages/CountryInfo';

function App() {
  const { setCountries, isDarkMode, toggleTheme } = useContext(Context);

  useEffect(() => {
    fetch(`https://restcountries.com/v2/all`)
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className={`App ${isDarkMode ? 'dark' : ''}`}>
      <Routes>
        <Route
          exact
          path="/"
          element={<Home theme={isDarkMode} handleClick={toggleTheme} />}
        ></Route>
        <Route
          path="/:countryId"
          element={<CountryInfo theme={isDarkMode} handleClick={toggleTheme} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
