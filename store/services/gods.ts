import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// IMPORT SMITE SOURCE RESPONSE DATA

export const godsApi = createApi({
  reducerPath: "godsApi",
  tagTypes: ["Gods"],
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
    getAllGods: builder.query<void, void>({
      query: () => "https://smitesource.com/api/get-all-gods",
      providesTags: ["Gods"],
    }),
  }),
});

export const { useGetAllGodsQuery } = godsApi;
