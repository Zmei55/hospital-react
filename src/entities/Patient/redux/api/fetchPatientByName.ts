import { api } from "app/redux";
import { IPatient } from "entities/Patient";

export const patientsByFilterApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchPatientByFilter: builder.mutation<IPatient[], FormData>({
      query: patient => ({
        url: "/api/patients/",
        method: "POST",
        body: patient,
      }),
      invalidatesTags: ["Patients"],
      transformResponse: (response: { data: { result: IPatient[] } }) =>
        response.data.result,
    }),
  }),
});

export const { useFetchPatientByFilterMutation } = patientsByFilterApi;
