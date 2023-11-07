import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  landuser: null,
  skip: true,
};

export const landusersSlice = createSlice({
  name: 'landusers',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
    setLanduser: (state, action) => {
      state.cn = action.payload
    },
  },
});

export const { open, close, setLanduser } = landusersSlice.actions;

export default landusersSlice.reducer;
