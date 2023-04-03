import { api } from "app/redux";

export const patientsByNameApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchPatientByName: builder.mutation({
      query: patient => ({
        url: "/api/patients/",
        method: "POST",
        body: patient,
      }),
      invalidatesTags: ["Patients"],
    }),
  }),
});

export const { useFetchPatientByNameMutation } = patientsByNameApi;
