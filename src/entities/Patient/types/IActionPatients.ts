import { IPatient } from "./IPatient";

export interface IActionPatients {
  data: {
    data: {
      result: IPatient;
    };
  };
}
