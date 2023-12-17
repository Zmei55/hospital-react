import { IDetail } from "entities/Service";

export interface IRequestResponse {
  _id: string | number;
  requestNumber: number;
  patientId: string | number;
  patientName: string;
  cardNumber: number;
  createdAt: Date;
  requestDetails: IDetail[];
}
