export interface IAddress {
  _id?: string | number;
  street: string;
  houseNumber: number;
  city: string;
  postcode: number;
  createdAt?: string;
}
