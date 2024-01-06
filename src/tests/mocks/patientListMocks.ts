import { TPatient } from "entities/Patient";
import { addressMocks } from "tests/mocks";

export const patientListMocks: TPatient[] = [
  {
    _id: 1,
    name: "Emma Muster",
    birthDate: new Date("1968-12-26T00:00:00.000+00:00"),
    cardNumber: 123456789,
    gender: "FEMALE",
    phoneNumber: "+491234567890",
    email: "emma-muster@mail.com",
    identityDocument: "ausweis",
    createdAt: new Date("2023-10-16T00:00:00.000+00:00"),
    address: addressMocks,
  },
  {
    _id: 2,
    name: "Ben Muster",
    birthDate: new Date("1970-03-06T00:00:00.000+00:00"),
    cardNumber: 234567891,
    gender: "MALE",
    phoneNumber: "+492345678912",
    email: "ben-muster@mail.com",
    identityDocument: "ausweis",
    createdAt: new Date("2023-10-16T00:00:00.000+00:00"),
    address: addressMocks,
  },
  {
    _id: 3,
    name: "Bob Muster",
    birthDate: new Date("1973-07-14T00:00:00.000+00:00"),
    cardNumber: 345678912,
    gender: "MALE",
    phoneNumber: "+493456789123",
    email: "bob-muster@mail.com",
    identityDocument: "ausweis",
    createdAt: new Date("2023-10-16T00:00:00.000+00:00"),
    address: addressMocks,
  },
];
