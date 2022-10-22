import React from 'react';
import { useSelector } from 'react-redux';
import Country from '../Country/Country';
import style from './CountriesView.module.scss';

const CountriesView = () => {
  const countries = useSelector((state) => state.countries);

  return (
    <section id={style.countries} data-testid="countries-container">
      {
        countries.loading ? (
          <div className={style.loadingContainer}>
            <p>Data is still loading...</p>
            <img src={`${process.env.PUBLIC_URL}images/spinner.gif`} alt="Spinning loader" />
          </div>
        ) : (
          <div id={style.container}>
            {
              countries.list.map((country) => (
                <Country key={country.country} name={country.country} flag={country.flag} />
              ))
            }
          </div>
        )
      }
    </section>
  );
};

export default CountriesView;
