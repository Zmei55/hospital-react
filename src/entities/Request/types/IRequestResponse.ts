import { IDetail } from "entities/Service";

export interface IRequestResponse {
  _id: string;
  requestNumber: number;
  patientId: string;
  firstName: string;
  lastName: string;
  cardNumber: number;
  createdAt: Date;
  requestDetails: IDetail[];
}
