import { configureStore } from '@reduxjs/toolkit';
import countriesSlice from './countries/countries';

export default configureStore({
  reducer: {
    countries: countriesSlice,
  },
});
