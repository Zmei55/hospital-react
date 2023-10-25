import { api } from "app/redux";
import { IPatient, ISearchPatientState } from "entities/Patient";

export const patientsByFilterApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchPatientByFilter: builder.mutation<IPatient[], ISearchPatientState>({
      query: filter => ({
        url: "/api/patients/",
        method: "POST",
        body: filter,
      }),
      invalidatesTags: ["Patients"],
      transformResponse: (response: { data: { result: IPatient[] } }) =>
        response.data.result,
    }),
  }),
});

export const { useFetchPatientByFilterMutation } = patientsByFilterApi;
