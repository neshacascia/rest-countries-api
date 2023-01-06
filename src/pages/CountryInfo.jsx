import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Context } from '../components/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

export default function CountryInfo(props) {
  const { countryId } = useParams();

  const { countries } = useContext(Context);

  const thisCountry = countries.find(
    country => country.alpha3Code === countryId
  );

  return (
    <div className={props.theme ? 'dark' : ''}>
      <Navbar theme={props.theme} handleClick={props.handleClick} />
      <main className="country-page">
        <Link to="/">
          <FontAwesomeIcon
            icon={faArrowLeftLong}
            className="arrow"
          ></FontAwesomeIcon>
          <span className="button">Back</span>
        </Link>

        <section>
          <img src={thisCountry.flags.svg} />

          <div className="country-details">
            <h2>{thisCountry.name}</h2>

            <div className="top">
              <div className="left">
                <span className="bold">
                  Native Name: <span>{thisCountry.nativeName}</span>
                </span>

                <span className="bold">
                  Population:{' '}
                  <span>{thisCountry.population.toLocaleString()}</span>
                </span>

                <span className="bold">
                  Region: <span>{thisCountry.region}</span>
                </span>

                <span className="bold">
                  Sub Region: <span>{thisCountry.subregion}</span>
                </span>

                <span className="bold">
                  Capital: <span>{thisCountry.capital}</span>
                </span>
              </div>

              <div className="right">
                <span className="bold">
                  Top Level Domain: <span>{thisCountry.topLevelDomain[0]}</span>
                </span>

                <span className="bold">
                  Currencies: <span>{thisCountry.currencies[0].name}</span>
                </span>

                <span className="bold">
                  Languages:{' '}
                  {thisCountry.languages.length > 1 ? (
                    thisCountry.languages.map(item => (
                      <span key={item.name}>{item.name}</span>
                    ))
                  ) : (
                    <span>{thisCountry.languages[0].name}</span>
                  )}
                </span>
              </div>
            </div>

            {/* {thisCountry.borders && (
              <div className="">
                <span className="bold borders">
                  Border Countries:{' '}
                  {thisCountry.borders.map((item, ind) => (
                    <span className="border" key={ind}>
                      {item}
                    </span>
                  ))}
                </span>
              </div>
            )} */}
          </div>
        </section>
      </main>
    </div>
  );
}