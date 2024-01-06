type Address = {
  _id: string | number;
  street: string;
  houseNumber: number;
  city: string;
  postcode: number;
  createdAt: Date;
};

export type TAddress = Omit<Address, "createdAt">;

export type TNewAddress = Omit<Address, "_id" | "createdAt">;

export type TAddressState = {
  address: TAddress | null;
};
