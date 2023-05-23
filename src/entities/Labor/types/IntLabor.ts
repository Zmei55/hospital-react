export interface ILabor {
  _id: string;
  laborName: string;
  laborIsActive: boolean;
  laborAddress: {
    street: string;
    houseNumber: string;
    city: string;
    postcode: string;
  };
}
