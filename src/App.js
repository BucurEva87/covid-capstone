import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom';
import CountriesView from './components/CountriesView/CountriesView';
import { fetchCountriesThunk } from './redux/countries/countries';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountriesThunk());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route
          path="/countries"
          index
          element={<CountriesView />}
        />
        <Route
          path="/"
          element={<Navigate to="/countries" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
