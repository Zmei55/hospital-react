import { IPatientSearchModalForm } from "entities/Patient";
import {
  Form,
  Label,
  NameInput,
  BirthDayInput,
  MedicalCardInput,
} from "./PatientSearchModalForm.styled";

export const PatientSearchModalForm: React.FC<IPatientSearchModalForm> = ({
  formState,
  handleChange,
  handlePatientsListFind,
}) => {
  return (
    <Form onSubmit={handlePatientsListFind}>
      <Label>
        <NameInput
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
          placeholder="Name"
        />
      </Label>

      <Label>
        <BirthDayInput
          type="date"
          name="birthDate"
          value={formState.birthDate}
          onChange={handleChange}
          placeholder="Date of Birth"
        />
      </Label>

      <Label>
        <MedicalCardInput
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
