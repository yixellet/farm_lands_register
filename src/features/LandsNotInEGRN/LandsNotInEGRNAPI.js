import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const { host, port } = require('../../config/api.config');

export const landsNotInEGRNApi = createApi({
  reducerPath: 'landsNotInEGRNApi',
  baseQuery: fetchBaseQuery({ baseUrl: `http://${host}:${port}/` }),
  endpoints: (builder) => ({
    getLandsNotInEGRN: builder.query({
      query: () => `lands/not_in_egrn`,
      transformResponse: (responseData) => responseData,
    }),
  }),
});

export const {
  useGetLandsNotInEGRNQuery
} = landsNotInEGRNApi;