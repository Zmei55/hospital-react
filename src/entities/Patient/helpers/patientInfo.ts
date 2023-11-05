import { IPatient } from "entities/Patient";

export const patientInfo = (patient: IPatient) => {
  const {
    name,
    birthDate,
    gender,
    cardNumber,
    phoneNumber,
    email,
    identityDocument,
    address,
  } = patient;

  const dateOfBirth = `${birthDate.slice(8, 10)}
  .${birthDate.slice(5, 7)}
  .${birthDate.slice(0, 4)}`;

  const residence = `
            ${address.street}, 
            ${address.houseNumber}, 
            ${address.postcode}, 
            ${address.city}
            `;

  return {
    name,
    dateOfBirth,
    gender,
    cardNumber,
    phoneNumber,
    email,
    identityDocument,
    residence,
  };
};
