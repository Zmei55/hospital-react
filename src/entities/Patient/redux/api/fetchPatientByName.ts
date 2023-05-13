import { api } from "app/redux";
import { IPatient, ISearchState } from "entities/Patient";

export const patientsByNameApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchPatientByName: builder.mutation<IPatient[], ISearchState>({
      query: patient => ({
        url: "/api/patients/",
        method: "POST",
        body: patient,
      }),
      invalidatesTags: ["Patients"],
      transformResponse: (
        response: { data: { result: IPatient[] } },
        meta,
        arg
      ) => response.data.result,
    }),
  }),
});

export const { useFetchPatientByNameMutation } = patientsByNameApi;
