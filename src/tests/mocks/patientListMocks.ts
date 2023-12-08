import { IPatient } from "entities/Patient";
import { addressMocks } from "tests/mocks";

export const patientListMocks: IPatient[] = [
  {
    _id: 1,
    name: "Emma Muster",
    birthDate: "1968-12-26T00:00:00.000+00:00",
    cardNumber: 123456789,
    gender: "FEMALE",
    phoneNumber: "+491234567890",
    email: "emma-muster@mail.com",
    identityDocument: "ausweis",
    address: addressMocks,
  },
  {
    _id: 2,
    name: "Ben Muster",
    birthDate: "1970-03-06T00:00:00.000+00:00",
    cardNumber: 234567891,
    gender: "MALE",
    phoneNumber: "+492345678912",
    email: "ben-muster@mail.com",
    identityDocument: "ausweis",
    address: addressMocks,
  },
  {
    _id: 3,
    name: "Bob Muster",
    birthDate: "1973-07-14T00:00:00.000+00:00",
    cardNumber: 345678912,
    gender: "MALE",
    phoneNumber: "+493456789123",
    email: "bob-muster@mail.com",
    identityDocument: "ausweis",
    address: addressMocks,
  },
];
