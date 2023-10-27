import { IDetail } from "entities/Service";

export interface IRequestResponse {
  _id: string;
  requestNumber: number;
  patientId: string;
  name: string;
  cardNumber: number;
  createdAt: Date;
  requestDetails: IDetail[];
}
