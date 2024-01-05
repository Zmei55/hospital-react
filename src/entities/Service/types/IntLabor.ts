import { TAddress } from "entities/Patient";

export interface ILabor {
  _id: string | number;
  name: string;
  isActive: boolean;
  createdAt?: string;
  address?: TAddress;
}
