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

  const dateOfBirth = `${new Date(birthDate).getDate()}.
            ${new Date(birthDate).getMonth().toString().padStart(2, "0")}.
            ${new Date(birthDate).getFullYear()}
            `;
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
