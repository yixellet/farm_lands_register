import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

export const rentInfoSlice = createSlice({
  name: 'rentInfo',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
    openClose: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { open, close, openClose } = rentInfoSlice.actions;

export default rentInfoSlice.reducer;
