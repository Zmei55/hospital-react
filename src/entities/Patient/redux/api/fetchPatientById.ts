import { api } from "app/redux";

export const patientsByIdApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchPatientById: builder.query({
      query: _id => ({
        url: `/api/patients/${_id}`,
        method: "GET",
      }),
      providesTags: ["Patients"],
    }),
  }),
});

export const { useFetchPatientByIdQuery } = patientsByIdApi;
