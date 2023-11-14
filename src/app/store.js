import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import landInfoReducer from '../features/LandInfo/landInfoSlice';
import landusersReducer from '../features/Landusers/landusersSlice';
import controlsReducer from '../features/Controls/ControlsSlice';
import landsNotInEGRNReducer from '../features/LandsNotInEGRN/LandsNotInEGRNSlice';
import { landInfoApi } from '../features/LandInfo/landInfoAPI';
import { landusersApi } from '../features/Landusers/landusersAPI';
import { landsApi } from '../features/Map/landsAPI';
import { landsNotInEGRNApi } from '../features/LandsNotInEGRN/LandsNotInEGRNAPI';

export const store = configureStore({
  reducer: {
    landInfo: landInfoReducer,
    landusers: landusersReducer,
    controls: controlsReducer,
    landsNotInEGRN: landsNotInEGRNReducer,
    [landInfoApi.reducerPath]: landInfoApi.reducer,
    [landusersApi.reducerPath]: landusersApi.reducer,
    [landsApi.reducerPath]: landsApi.reducer,
    [landsNotInEGRNApi.reducerPath]: landsNotInEGRNApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
      .concat(landInfoApi.middleware)
      .concat(landusersApi.middleware)
      .concat(landsApi.middleware)
      .concat(landsNotInEGRNApi.middleware)
});

setupListeners(store.dispatch);
