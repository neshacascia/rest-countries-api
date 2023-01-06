import React, { createContext, useState } from 'react';
const Context = createContext();

function ContextProvider(props) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleTheme() {
    setIsDarkMode(prevState => !prevState);
  }
  const [countries, setCountries] = useState([]);
  console.log(countries);

  return (
    <Context.Provider
      value={{
        countries,
        setCountries,
        isDarkMode,
        toggleTheme,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
