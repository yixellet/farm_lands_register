import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const landusersApi = createApi({
  reducerPath: 'landusersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5002/users' }),
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