import { ISearchPatientState } from "entities/Patient";

export interface IPatientSearchModalForm {
  formState: ISearchPatientState;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  handlePatientsListFind: (
    event: React.SyntheticEvent<Element, Event>
  ) => Promise<void>;
}
