import React from 'react';
import { useSelector } from 'react-redux';
import Country from '../Country/Country';

import style from './CountriesView.module.scss';

const CountriesView = () => {
  const countries = useSelector((state) => state.countries);

  return (
    <section id="countries">
      {
        countries.loading ? (
          <div>
            <p>Data is still loading...</p>
            <img src={`${process.env.PUBLIC_URL}images/spinner.gif`} alt="Spinning loader" />
          </div>
        ) : (
          <div id={style.container}>
            {
              Object.entries(countries.list).map(([country, data]) => (
                <Country key={country} name={country} data={data} />
              ))
            }
          </div>
        )
      }
    </section>
  );
};

export default CountriesView;
