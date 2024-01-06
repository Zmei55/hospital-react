import { api } from "app/redux";
import { TPatient } from "entities/Patient";

export const patientsByIdApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchPatientById: builder.query<TPatient, string | number>({
      query: _id => ({
        url: `/api/patients/${_id}`,
        method: "GET",
      }),
      providesTags: ["Patients"],
      transformResponse: (response: { data: TPatient }) => response.data,
    }),
  }),
});

export const { useLazyFetchPatientByIdQuery } = patientsByIdApi;
