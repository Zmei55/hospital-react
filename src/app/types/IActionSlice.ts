import { IPatient } from "entities/Patient";

export interface IAction {
  data: {
    result: IPatient;
  };
}
