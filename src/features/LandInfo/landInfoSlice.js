import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  cn: null,
  skip: true,
};

export const landInfoSlice = createSlice({
  name: 'landInfo',
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
    setCN: (state, action) => {
      state.cn = action.payload
      state.skip = false
    },
    setCNtoNull: (state) => {
      state.cn = null
      state.skip = true
    }
  },
});

export const { open, close, openClose, setCN, setCNtoNull } = landInfoSlice.actions;

export default landInfoSlice.reducer;
