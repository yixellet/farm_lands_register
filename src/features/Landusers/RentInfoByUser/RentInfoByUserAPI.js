import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const { host, port } = require('../../../config/api.config');

export const rentInfoByUserApi = createApi({
  reducerPath: 'rentInfoByUserApi',
  baseQuery: fetchBaseQuery({ baseUrl: `http://${host}:${port}/rents` }),
  endpoints: (builder) => ({
    getRentsByLanduser: builder.query({
      query: (user) => `by_landuser?user=${user}`,
      transformResponse: (responseData) => responseData,
    }),
    getRentsGeomByLanduser: builder.query({
      query: (user) => `by_landuser/geom?user=${user}`,
      transformResponse: (responseData) => responseData,
    }),
  }),
});

export const {
  useGetRentsByLanduserQuery,
  useGetRentsGeomByLanduserQuery
} = rentInfoByUserApi;