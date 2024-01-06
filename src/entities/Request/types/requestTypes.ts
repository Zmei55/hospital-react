import { TDetails } from "./detailsTypes";

type RequestType = {
  _id: string | number;
  requestNumber: number | null;
  patientId: string | number | null;
  requestDetails: TDetails[] | null;
  owner: string | number;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type TRequest = Omit<RequestType, "owner" | "isCompleted" | "updatedAt">;

export type TRequestSlice = Pick<
  RequestType,
  "requestNumber" | "requestDetails"
> & { requestId: string | number | null };

export type TRequestFilterReq = Pick<
  RequestType,
  "requestNumber" | "createdAt"
> & {
  patientName: string | null;
  cardNumber: number | null;
};

export type TRequestFilterRes = Pick<RequestType, "_id" | "createdAt"> & {
  requestNumber: number;
  patientId: string | number;
  patientName: string;
  cardNumber: number;
  requestDetails: TDetails[];
};
