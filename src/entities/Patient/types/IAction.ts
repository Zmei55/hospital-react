import { IPatient } from "./IPatient";

export interface IAction {
  data: {
    data: {
      result: IPatient[];
    };
  };
}
