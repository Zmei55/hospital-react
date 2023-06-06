export interface ILabor {
  _id: string;
  name: string;
  laborIsActive: boolean;
  laborAddress: {
    street: string;
    houseNumber: string;
    city: string;
    postcode: string;
  };
}
