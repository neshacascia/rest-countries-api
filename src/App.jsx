import { useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Context } from './components/Context';
import Home from './pages/Home';
import CountryInfo from './pages/CountryInfo';

function App() {
  const { setCountries, darkModeOn, toggleTheme } = useContext(Context);

  useEffect(() => {
    fetch(`https://restcountries.com/v2/all`)
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className={`App ${darkModeOn ? 'dark' : ''}`}>
      <Routes>
        <Route
          exact
          path="/"
          element={<Home theme={darkModeOn} handleClick={toggleTheme} />}
        ></Route>
        <Route
          path="/:countryId"
          element={<CountryInfo theme={darkModeOn} handleClick={toggleTheme} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
