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
    residenceAddress,
  } = patient;

  const dateOfBirth = `${new Date(birthDate).getDate()}.
            ${new Date(birthDate).getMonth().toString().padStart(2, "0")}.
            ${new Date(birthDate).getFullYear()}
            `;
  const residence = `
            ${residenceAddress.street}, 
            ${residenceAddress.houseNumber}, 
            ${residenceAddress.postcode}, 
            ${residenceAddress.city}
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
