import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../../redux/configureStore';
import Country from '../Country';

let getAllByRole;

const countries = [
  {
    country: 'Romania',
    confirmed: 2556,
    recovered: 0,
    deaths: 114,
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/RO.svg',
  },
  {
    country: 'England',
    confirmed: 13872,
    recovered: 0,
    deaths: 1774,
    flag: 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/EN.svg',
  },
];

beforeEach(() => {
  const component = render(
    <Provider store={store}>
      <Router>
        <Country
          key={countries[0].country}
          name={countries[0].country}
          country={countries[0].country}
          confirmed={countries[0].confirmed}
          recovered={countries[0].recovered}
          deaths={countries[0].deaths}
          flag={countries[0].flag}
        />
        <Country
          key={countries[1].country}
          name={countries[1].country}
          country={countries[1].country}
          confirmed={countries[1].confirmed}
          recovered={countries[1].recovered}
          deaths={countries[1].deaths}
          flag={countries[1].flag}
        />
      </Router>
    </Provider>,
  );

  getAllByRole = component.getAllByRole;
});

describe('Country component', () => {
  test('is rendered two times on the screen', () => {
    expect(getAllByRole('article')).toHaveLength(2);
  });

  test('matches snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <Country
            key={countries[0].country}
            name={countries[0].country}
            country={countries[0].country}
            confirmed={countries[0].confirmed}
            recovered={countries[0].recovered}
            deaths={countries[0].deaths}
            flag={countries[0].flag}
          />
        </Router>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
