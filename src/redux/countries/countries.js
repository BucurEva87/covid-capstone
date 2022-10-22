import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_BASE_URL = 'https://covid-api.mmediagroup.fr/v1';

export const fetchCountriesThunk = createAsyncThunk('countries/fetch', async () => {
  const response = await fetch(`${API_BASE_URL}/cases`);
  const result = await response.json();
  const flagsResponse = await fetch('https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/by-code.json');
  const flags = await flagsResponse.json();

  const countries = [];

  Object.entries(result).forEach(([key, value]) => {
    if (value.All && value.All.country) {
      const {
        confirmed, recovered, deaths, abbreviation,
      } = value.All;

      countries.push({
        confirmed,
        recovered,
        deaths,
        country: key,
        flag: flags[abbreviation]?.image ?? undefined,
      });
    }
  });

  return countries;
});

const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    loading: false,
    list: [],
    error: '',
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCountriesThunk.pending, (state) => ({
      ...state, loading: true,
    }));
    builder.addCase(fetchCountriesThunk.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      list: action.payload,
    }));
    builder.addCase(fetchCountriesThunk.rejected, (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }));
  },
});

export default countriesSlice.reducer;
export const { selectCountry } = countriesSlice.actions;
