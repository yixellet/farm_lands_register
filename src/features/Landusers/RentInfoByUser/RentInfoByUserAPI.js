import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rentInfoByUserApi = createApi({
  reducerPath: 'rentInfoByUserApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5002/' }),
  endpoints: (builder) => ({
    getRentsByLanduser: builder.query({
      query: (user) => `rents/by_landuser?user=${user}`,
      transformResponse: (responseData) => responseData,
    }),
    getRentsGeomByLanduser: builder.query({
      query: (user) => `rents/by_landuser/geom?user=${user}`,
      transformResponse: (responseData) => responseData,
    }),
  }),
});

export const {
  useGetRentsByLanduserQuery,
  useGetRentsGeomByLanduserQuery
} = rentInfoByUserApi;