import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// IMPORT SMITE SOURCE RESPONSE DATA

export const buildApi = createApi({
  reducerPath: "buildApi",
  tagTypes: ["Builds"],
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
    getAllBuilds: builder.query<void, void>({
      query: () => "https://smitesource.com/api/get-all-builds",
      providesTags: ["Builds"],
    }),
  }),
});

export const { useGetAllBuildsQuery } = buildApi;
