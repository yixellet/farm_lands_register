import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const { host, port } = require('../../config/api.config');

export const landusersApi = createApi({
  reducerPath: 'landusersApi',
  baseQuery: fetchBaseQuery({ baseUrl: `http://${host}:${port}/users` }),
  endpoints: (builder) => ({
    getActualLandusers: builder.query({
      query: () => `actual`,
      transformResponse: (responseData) => responseData,
    }),
    getNonActualLandusers: builder.query({
      query: () => `non_actual`,
      transformResponse: (responseData) => responseData,
    }),
  }),
});

export const {
  useGetActualLandusersQuery,
  useGetNonActualLandusersQuery
} = landusersApi;