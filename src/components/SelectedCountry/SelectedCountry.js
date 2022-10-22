import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import style from './SelectedCountry.module.scss';

const SelectedCountry = () => {
  const { name } = useParams();
  const element = useSelector((state) => state.countries.list.find((c) => c.country === name));
  const {
    confirmed, recovered, deaths, country, flag,
  } = element;

  return (
    <section id={style.detailsSection}>
      <article>
        <h2>
          {country}
        </h2>
        <img src={flag} alt="Country flag not available" className={style.flag} />
        <p>
          Confirmed cases:
          {' '}
          <strong>{confirmed}</strong>
        </p>
        <p>
          Recovered cases:
          {' '}
          <strong>{recovered}</strong>
        </p>
        <p>
          Deaths:
          {' '}
          <strong>{deaths}</strong>
        </p>
      </article>
    </section>
  );
};

export default SelectedCountry;
