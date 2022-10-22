import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../../redux/configureStore';
import CountriesView from '../CountriesView';

let getByTestId;

beforeEach(() => {
  const component = render(
    <Provider store={store}>
      <CountriesView />
    </Provider>,
  );

  getByTestId = component.getByTestId;
});

describe('CountriesView component', () => {
  test('renders on the screen', () => {
    expect(getByTestId('countries-container')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <CountriesView />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
