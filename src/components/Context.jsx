import React, { createContext, useState } from 'react';
const Context = createContext();

function ContextProvider(props) {
  const [darkModeOn, setDarkModeOn] = useState(false);

  function toggleTheme() {
    setDarkModeOn(prevState => !prevState);
  }
  const [countries, setCountries] = useState([]);
  console.log(countries);

  return (
    <Context.Provider
      value={{
        countries,
        setCountries,
        darkModeOn,
        toggleTheme,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
