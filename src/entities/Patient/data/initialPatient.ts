import { IPatient } from "entities/Patient";

export const initialPatient: IPatient = {
  _id: "",
  firstName: "",
  lastName: "",
  birthDate: "",
  cardNumber: 0,
  gender: "",
  phoneNumber: "",
  email: "",
  identityDocument: "",
  address: {
    street: "",
    houseNumber: "",
    city: "",
    postcode: "",
  },
};
