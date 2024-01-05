type Address = {
  _id: string | number | null;
  street: string | null;
  houseNumber: number | null;
  city: string | null;
  postcode: number | null;
  createdAt: Date | null;
};

export type TAddress = Omit<Address, "createdAt">;

export type TNewAddress = Omit<Address, "_id" | "createdAt">;
