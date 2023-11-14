import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  archive: false,
};

export const controlsSlice = createSlice({
  name: 'controls',
  initialState,
  reducers: {
    toggleArchive: (state, action) => {
      state.archive = action.payload;
    },
  },
});

export const { toggleArchive } = controlsSlice.actions;

export default controlsSlice.reducer;
