import { InputEl } from "shared";
import { ISearchPatientState } from "entities/Patient";

import { Form, Label } from "./SearchModalFormEl.styled";

interface ISearchModalForm {
  formState: ISearchPatientState;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  handlePatientsListFind: (
    event: React.SyntheticEvent<Element, Event>
  ) => Promise<void>;
}

export const SearchModalFormEl: React.FC<ISearchModalForm> = ({
  formState,
  handleChange,
  handlePatientsListFind,
}) => {
  return (
    <Form onSubmit={handlePatientsListFind}>
      <Label>
        <InputEl
          width="650px"
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
          placeholder="Name"
        />
      </Label>

      <Label>
        <InputEl
          width="294px"
          type="date"
          name="birthDate"
          value={formState.birthDate}
          onChange={handleChange}
          placeholder="Date of Birth"
        />
      </Label>

      <Label>
        <InputEl
          width="206px"
          type="text"
          name="cardNumber"
          value={formState.cardNumber}
          onChange={handleChange}
          placeholder="Card number"
        />
      </Label>
    </Form>
  );
};
