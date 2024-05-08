import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  height: 0,
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setHeaderHeight: (state, { payload }) => {
      state.height = payload;
    },
  },
});

export default headerSlice;
export const { setHeaderHeight } = headerSlice.actions;
