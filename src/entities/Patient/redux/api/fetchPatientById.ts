import { api } from "app/redux";
import { IPatient } from "entities/Patient";

export const patientsByIdApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchPatientById: builder.query<IPatient, string>({
      query: _id => ({
        url: `/api/patients/${_id}`,
        method: "GET",
      }),
      providesTags: ["Patients"],
      transformResponse: (response: { data: { result: IPatient } }) =>
        response.data.result,
    }),
  }),
});

export const { useFetchPatientByIdQuery } = patientsByIdApi;
