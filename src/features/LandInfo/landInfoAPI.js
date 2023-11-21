import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const { host, port } = require('../../config/api.config');

export const landInfoApi = createApi({
  reducerPath: 'landInfoApi',
  baseQuery: fetchBaseQuery({ baseUrl: `http://${host}:${port}/` }),
  endpoints: (builder) => ({
    getLandInfo: builder.query({
      query: (cn) => `lands?cn=${cn}`,
      transformResponse: (responseData) => responseData,
    })
  }),
});

export const {
  useGetLandInfoQuery
} = landInfoApi;