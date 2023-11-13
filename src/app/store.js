import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import landInfoReducer from '../features/LandInfo/landInfoSlice';
import landusersReducer from '../features/Landusers/landusersSlice';
import mapReducer from '../features/Map/MapSlice';
import { landInfoApi } from '../features/LandInfo/landInfoAPI';
import { landusersApi } from '../features/Landusers/landusersAPI';
import { landsApi } from '../features/Map/landsAPI';

export const store = configureStore({
  reducer: {
    landInfo: landInfoReducer,
    landusers: landusersReducer,
    map: mapReducer,
    [landInfoApi.reducerPath]: landInfoApi.reducer,
    [landusersApi.reducerPath]: landusersApi.reducer,
    [landsApi.reducerPath]: landsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
      .concat(landInfoApi.middleware)
      .concat(landusersApi.middleware)
      .concat(landsApi.middleware)
});

setupListeners(store.dispatch);
