import { TDetails, TNewDetails } from "./detailsTypes";

type RequestType = {
  _id: string | number | null;
  requestNumber: number | null;
  patientId: string | number | null;
  requestDetails: TDetails[] | null;
  owner: string | number | null;
  isCompleted: boolean | null;
  createdAt: Date | null;
  updatedAt: Date | null;
};

export type TRequest = Omit<RequestType, "owner" | "isCompleted" | "updatedAt">;

export type TRequestSlice = Pick<
  RequestType,
  "_id" | "requestNumber" | "requestDetails"
>;

export type TRequestFilterReq = Pick<
  RequestType,
  "requestNumber" | "createdAt"
> & {
  patientName: string | null;
  cardNumber: number | null;
};

export type TRequestFilterRes = Pick<RequestType, "_id" | "createdAt"> & {
  requestNumber: number | null;
  patientId: string | number | null;
  patientName: string | null;
  cardNumber: number | null;
  requestDetails: TDetails[] | null;
};

export type TRequestSave = Pick<RequestType, "requestNumber" | "patientId"> & {
  newRequestDetails: TNewDetails[];
};
