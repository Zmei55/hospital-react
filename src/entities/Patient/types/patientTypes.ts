import { TAddress } from "entities/Address";

type Patient = {
  _id: string | number | null;
  name: string | null;
  birthDate: Date | null;
  cardNumber: number | null;
  gender: "MALE" | "FEMALE" | "DIVERSE" | null;
  phoneNumber: string | null;
  email: string | null;
  identityDocument: string | null;
  createdAt: Date | null;
  address: TAddress | null;
};

export type TPatient = Omit<Patient, "cratedAt">;

export type TNewPatient = Pick<
  TPatient,
  "name" | "birthDate" | "gender" | "phoneNumber" | "email" | "identityDocument"
> & { addressId: string };

export type TPatientsState = {
  patient: TPatient | null;
  isActiveInfo: boolean;
  modalPatient: boolean;
};

export type TPatientFilter = Pick<Patient, "name" | "birthDate" | "cardNumber">;
