import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const landsApi = createApi({
  reducerPath: 'landsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/geoserver/farm_lands' }),
  endpoints: (builder) => ({
    getLands: builder.query({
      query: () => `ows?service=WFS&version=1.0.0&request=GetFeature&typeName=farm_lands%3Alands&outputFormat=application%2Fjson`,
      transformResponse: (responseData) => responseData,
    }),
  }),
});

export const {
  useGetLandsQuery
} = landsApi;