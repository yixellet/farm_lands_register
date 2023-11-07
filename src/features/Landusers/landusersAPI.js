import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const landusersApi = createApi({
  reducerPath: 'landusersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5002/' }),
  endpoints: (builder) => ({
    getLandusers: builder.query({
      query: () => `landusers`,
      transformResponse: (responseData) => responseData,
    }),
  }),
});

export const {
  useGetLandusersQuery
} = landusersApi;