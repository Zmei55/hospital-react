import { useForm, SubmitHandler } from "react-hook-form";
import { ISearchPatientState } from "entities/Patient";

import {
  Form,
  Label,
  InputPatientName,
  InputBirthDay,
  InputCardNumber,
} from "./SearchModalFormEl.styled";

interface ISearchModalForm {
  handlePatientsListFind: SubmitHandler<ISearchPatientState>;
}

export const SearchModalFormEl: React.FC<ISearchModalForm> = ({
  handlePatientsListFind,
}) => {
  const { register, handleSubmit } = useForm<ISearchPatientState>({
    defaultValues: {
      name: undefined,
      birthDate: undefined,
      cardNumber: undefined,
    },
  });

  return (
    <Form id="findPatientList" onSubmit={handleSubmit(handlePatientsListFind)}>
      <Label>
        <InputPatientName {...register("name")} placeholder="Name" />
      </Label>

      <Label>
        <InputBirthDay
          type="date"
          {...register("birthDate")}
          placeholder="Date of Birth"
        />
      </Label>

      <Label>
        <InputCardNumber
          {...register("cardNumber")}
          placeholder="Card number"
        />
      </Label>
    </Form>
  );
};
