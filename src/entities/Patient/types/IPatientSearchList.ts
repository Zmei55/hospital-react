import { IPatient } from "entities/Patient";

export interface IPatientSearchList {
  patientsList: IPatient[];
  choosePatient: (event: string) => void;
}
