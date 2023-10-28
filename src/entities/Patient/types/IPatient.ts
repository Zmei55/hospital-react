export interface IPatient {
  _id: string | number;
  name: string;
  birthDate: string;
  cardNumber: number;
  gender: string;
  phoneNumber: string;
  email: string;
  identityDocument: string;
  address: {
    street: string;
    houseNumber: string;
    city: string;
    postcode: string;
  };
}
