import { IPatient } from "entities/Patient";

export const patientMocks: IPatient = {
  _id: 1,
  name: "Emma Muster",
  birthDate: "1968-12-26T00:00:00.000+00:00",
  cardNumber: 123456789,
  gender: "FEMALE",
  phoneNumber: "+491234567890",
  email: "emma-muster@mail.com",
  identityDocument: "ausweis",
  address: {
    street: "Emmentaler Straße",
    houseNumber: 45,
    city: "Berlin",
    postcode: 12345,
  },
};
