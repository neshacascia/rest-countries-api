import React, { useContext } from 'react';
import Cards from '../components/Cards';
import { Context } from '../components/Context';

export default function Countries(props) {
  const { countries } = useContext(Context);

  return (
    <div className={`homepage ${props.theme ? 'dark' : ''}`}>
      <main className="countries-listings">
        {countries.map((country, ind) => {
          return <Cards country={country} key={ind.toString()} />;
        })}
      </main>
    </div>
  );
}
