import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const landInfoApi = createApi({
  reducerPath: 'landInfoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5002/' }),
  endpoints: (builder) => ({
    getLandInfo: builder.query({
      query: (cn) => `lands?cn=${cn}`,
      transformResponse: (responseData) => responseData,
    }),
    getAllRentInfo: builder.query({
      query: (cn) => `rents?cn=${cn}`,
      transformResponse: (responseData) => responseData,
    }),
  }),
});

export const {
  useGetLandInfoQuery,
  useGetAllRentInfoQuery
} = landInfoApi;