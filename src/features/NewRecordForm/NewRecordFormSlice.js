import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: true,
};

export const newRecordFormSlice = createSlice({
  name: 'newRecordForm',
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

export const { open, close, openClose } = newRecordFormSlice.actions;

export default newRecordFormSlice.reducer;
