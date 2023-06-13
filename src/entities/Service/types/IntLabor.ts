export interface ILabor {
  _id: string;
  name: string;
  isActive: boolean;
  address?: {
    street: string;
    houseNumber: string;
    city: string;
    postcode: string;
  };
}
