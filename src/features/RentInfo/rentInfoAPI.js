import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const { host, port } = require('../../config/api.config');

export const rentInfoApi = createApi({
  reducerPath: 'rentInfoApi',
  baseQuery: fetchBaseQuery({ baseUrl: `http://${host}:${port}/` }),
  endpoints: (builder) => ({
    getAllRentInfo: builder.query({
      query: (cn) => `rents?cn=${cn}`,
      transformResponse: (responseData) => responseData,
    }),
  }),
});

export const {
  useGetAllRentInfoQuery,
} = rentInfoApi;