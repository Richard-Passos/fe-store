import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  height: 0,
  isVisible: true
};

const storeSlicesHeader = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setHeight: (state, { payload }) => {
      state.height = payload;
    },
    setIsVisible: (state, { payload }) => {
      state.isVisible = payload;
    }
  }
});

export default storeSlicesHeader;
export const { setHeight, setIsVisible } = storeSlicesHeader.actions;
