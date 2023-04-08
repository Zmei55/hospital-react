import { IClearInitialPatient } from "entities/Patient";

export const clearInitialPatient: IClearInitialPatient = {
  data: {
    result: {
      _id: "",
      name: "",
      birthDate: "",
      cardNumber: 0,
      gender: "",
      phoneNumber: "",
      email: "",
      identityDocument: "",
      residenceAddress: {
        street: "",
        houseNumber: "",
        city: "",
        postcode: "",
      },
      services: [],
      containers: [],
    },
  },
};
