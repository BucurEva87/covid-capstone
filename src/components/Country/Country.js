import React from 'react';
import { PropTypes as PT } from 'prop-types';
import { Link } from 'react-router-dom';
import style from './Country.module.scss';

const Country = ({ name, flag }) => (
  <article>
    <h2>
      <Link to={name}>{name}</Link>
    </h2>
    <img src={flag} alt="Country flag not available" className={style.flag} />
  </article>
);

Country.propTypes = {
  name: PT.string.isRequired,
  flag: PT.string.isRequired,
};

export default Country;
