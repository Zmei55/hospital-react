import { TAddress } from "./addressTypes";

type Patient = {
  _id: string | number;
  name: string;
  birthDate: Date;
  cardNumber: number;
  gender: "MALE" | "FEMALE" | "DIVERSE";
  phoneNumber: string | null;
  email: string | null;
  identityDocument: string | null;
  createdAt: Date;
  address: TAddress;
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

export type TPatientFilter = {
  name: string;
  birthDate: Date;
  cardNumber: number;
};
