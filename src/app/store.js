import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import landInfoReducer from '../features/LandInfo/landInfoSlice';
import rentInfoReducer from '../features/RentInfo/rentInfoSlice';
import landusersReducer from '../features/Landusers/landusersSlice';
import rentInfoByUserReducer from '../features/Landusers/RentInfoByUser/RentInfoByUserSlice';
import controlsReducer from '../features/Controls/ControlsSlice';
import landsNotInEGRNReducer from '../features/LandsNotInEGRN/LandsNotInEGRNSlice';
import { landInfoApi } from '../features/LandInfo/landInfoAPI';
import { rentInfoApi } from '../features/RentInfo/rentInfoAPI';
import { landusersApi } from '../features/Landusers/landusersAPI';
import { rentInfoByUserApi } from '../features/Landusers/RentInfoByUser/RentInfoByUserAPI';
import { landsApi } from '../features/Map/landsAPI';
import { landsNotInEGRNApi } from '../features/LandsNotInEGRN/LandsNotInEGRNAPI';

export const store = configureStore({
  reducer: {
    landInfo: landInfoReducer,
    rentInfo: rentInfoReducer,
    landusers: landusersReducer,
    rentInfoByUser: rentInfoByUserReducer,
    controls: controlsReducer,
    landsNotInEGRN: landsNotInEGRNReducer,
    [landInfoApi.reducerPath]: landInfoApi.reducer,
    [rentInfoApi.reducerPath]: rentInfoApi.reducer,
    [landusersApi.reducerPath]: landusersApi.reducer,
    [rentInfoByUserApi.reducerPath]: rentInfoByUserApi.reducer,
    [landsApi.reducerPath]: landsApi.reducer,
    [landsNotInEGRNApi.reducerPath]: landsNotInEGRNApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
      .concat(landInfoApi.middleware)
      .concat(landusersApi.middleware)
      .concat(rentInfoByUserApi.middleware)
      .concat(landsApi.middleware)
      .concat(landsNotInEGRNApi.middleware)
      .concat(rentInfoApi.middleware)
});

setupListeners(store.dispatch);
