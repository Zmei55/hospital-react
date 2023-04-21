import { IPatient } from "entities/Patient";

export interface IActionSlice {
  data: {
    result: IPatient;
  };
}
