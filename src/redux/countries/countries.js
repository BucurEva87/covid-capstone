import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_BASE_URL = 'https://covid-api.mmediagroup.fr/v1';

export const fetchCountriesThunk = createAsyncThunk('countries/fetch', async () => {
  const response = await fetch(`${API_BASE_URL}/cases`);
  const result = await response.json();

  return result;
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
    builder.addCase(fetchCountriesThunk.fulfilled, (state, action) => {
      const countries = {};

      Object.entries(action.payload).forEach(([key, value]) => {
        if (value.All && value.All.country) {
          const {
            confirmed, recovered, deaths,
          } = value.All;

          countries[key] = {
            confirmed, recovered, deaths,
          };
        }
      });

      return {
        ...state,
        loading: false,
        list: countries,
      };
    });
    builder.addCase(fetchCountriesThunk.rejected, (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }));
  },
});

export default countriesSlice.reducer;
export const { selectCountry } = countriesSlice.actions;
