import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const landsNotInEGRNApi = createApi({
  reducerPath: 'landsNotInEGRNApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5002/' }),
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