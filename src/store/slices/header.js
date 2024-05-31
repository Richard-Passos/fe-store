import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  height: 0
};

const storeSlicesHeader = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setHeight: (state, { payload }) => {
      state.height = payload;
    }
  }
});

export default storeSlicesHeader;
export const { setHeight } = storeSlicesHeader.actions;
