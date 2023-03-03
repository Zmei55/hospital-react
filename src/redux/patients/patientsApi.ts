import { api } from "redux/api";

export const patientsApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchPatientById: builder.query({
      query: _id => ({
        url: `/api/patients/${_id}`,
        method: "GET",
      }),
      providesTags: ["Patients"],
    }),
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

export const { useFetchPatientByIdQuery, useFetchPatientByNameMutation } =
  patientsApi;
