import { IAddress } from "./IAddress";

export interface IPatient {
  _id: string | number;
  name: string;
  birthDate: string;
  cardNumber: number;
  gender: "FEMALE" | "MALE" | "DIVERSE" | "";
  phoneNumber: string;
  email: string;
  identityDocument: string;
  address: IAddress;
}
