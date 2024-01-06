import { api } from "app/redux";
import { TPatient, TPatientFilter } from "entities/Patient";

export const patientsByFilterApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchPatientByFilter: builder.mutation<TPatient[], TPatientFilter>({
      query: filter => ({
        url: "/api/patients/",
        method: "POST",
        body: filter,
      }),
      invalidatesTags: ["Patients"],
      transformResponse: (response: { data: TPatient[] }) => response.data,
    }),
  }),
});

export const { useFetchPatientByFilterMutation } = patientsByFilterApi;
