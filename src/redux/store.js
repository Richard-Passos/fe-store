import { configureStore } from '@reduxjs/toolkit';

import headerSlice from './headerSlice';

const slices = [
  headerSlice
]

const store = configureStore({
  reducer: slices.reduce((obj, slice) => ({ ...obj, [slice.name]: slice.reducer}), {})
});

export default store;
