import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

export const landsNotInEGRNSlice = createSlice({
  name: 'landsNotInEGRN',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
    openClose: (state) => {
      state.isOpen = !state.isOpen
    },
  },
});

export const { open, close, openClose } = landsNotInEGRNSlice.actions;

export default landsNotInEGRNSlice.reducer;
