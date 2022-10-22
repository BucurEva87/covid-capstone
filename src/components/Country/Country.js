import React from 'react';
import { PropTypes as PT } from 'prop-types';

const Country = ({ name, data }) => (
  <article>
    <p>
      {name}
      {' '}
      =&gt; Deaths:
      {' '}
      { data.deaths }
    </p>
  </article>
);

Country.propTypes = {
  name: PT.string.isRequired,
  data: PT.shape({
    confirmed: PT.number.isRequired,
    recovered: PT.number.isRequired,
    deaths: PT.number.isRequired,
  }).isRequired,
};

export default Country;
