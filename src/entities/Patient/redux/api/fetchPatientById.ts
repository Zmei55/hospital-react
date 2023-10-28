import { api } from "app/redux";
import { IPatient } from "entities/Patient";

export const patientsByIdApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchPatientById: builder.query<IPatient, string | number>({
      query: _id => ({
        url: `/api/patients/${_id}`,
        method: "GET",
      }),
      providesTags: ["Patients"],
      transformResponse: (response: { data: IPatient }) => response.data,
    }),
  }),
});

export const { useLazyFetchPatientByIdQuery } = patientsByIdApi;
