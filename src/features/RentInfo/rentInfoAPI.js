import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rentInfoApi = createApi({
  reducerPath: 'rentInfoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5002/' }),
  endpoints: (builder) => ({
    getAllRentInfo: builder.query({
      query: (cn) => `rents?cn=${cn}`,
      transformResponse: (responseData) => responseData,
    }),
  }),
});

export const {
  useGetAllRentInfoQuery
} = rentInfoApi;