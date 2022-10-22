import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountriesThunk } from './redux/countries/countries';

const App = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(fetchCountriesThunk());
  }, [dispatch]);

  return (
    <div className="App">
      {
        countries.loading ? (
          <div>
            <p>Data is still loading...</p>
            <img src={`${process.env.PUBLIC_URL}images/spinner.gif`} alt="Spinning loader" />
          </div>
        ) : (
          <p>{ JSON.stringify(countries.list) }</p>
        )
      }
    </div>
  );
};

export default App;
