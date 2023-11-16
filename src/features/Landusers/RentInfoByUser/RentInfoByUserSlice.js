import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isOpen: false,
  lands: [],
};

export const rentInfoByUserSlice = createSlice({
  name: 'rentInfoByUser',
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
    setUser: (state, action) => {
      state.user = action.payload;
    }
  },
});

export const { open, close, openClose, setUser } = rentInfoByUserSlice.actions;

export default rentInfoByUserSlice.reducer;
