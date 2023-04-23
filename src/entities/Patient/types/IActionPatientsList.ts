import { IPatient } from "./IPatient";

export interface IActionPatientsList {
  data: {
    data: {
      result: IPatient[];
    };
  };
}
