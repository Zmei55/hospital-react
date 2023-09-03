import { api } from "app/redux";
import { IPatient } from "entities/Patient";

export const patientsByNameApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchPatientByName: builder.mutation<IPatient[], FormData>({
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

export const { useFetchPatientByNameMutation } = patientsByNameApi;
