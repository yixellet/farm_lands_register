import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const landsApi = createApi({
  reducerPath: 'landsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/geoserver/invent' }),
  endpoints: (builder) => ({
    getNonActualRentedLands: builder.query({
      query: () => `ows?service=WFS&version=1.0.0&request=GetFeature&typeName=invent%3Anon_actual_rented_lands&outputFormat=application%2Fjson`,
      transformResponse: (responseData) => responseData,
    }),
    getActualRentedLands: builder.query({
      query: () => `ows?service=WFS&version=1.0.0&request=GetFeature&typeName=invent%3Aactual_rented_lands&outputFormat=application%2Fjson`,
      transformResponse: (responseData) => responseData,
    }),
  }),
});

export const {
  useGetNonActualRentedLandsQuery,
  useGetActualRentedLandsQuery
} = landsApi;