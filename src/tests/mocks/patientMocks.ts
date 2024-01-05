import { TPatient } from "entities/Patient";

export const patientMocks: TPatient = {
  _id: 1,
  name: "Emma Muster",
  birthDate: new Date("1968-12-26T00:00:00.000+00:00"),
  cardNumber: 123456789,
  gender: "FEMALE",
  phoneNumber: "+491234567890",
  email: "emma-muster@mail.com",
  identityDocument: "ausweis",
  createdAt: new Date("2023-10-16T00:00:00.000+00:00"),
  address: {
    _id: 1,
    street: "Emmentaler Straße",
    houseNumber: 45,
    city: "Berlin",
    postcode: 12345,
  },
};
