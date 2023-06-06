import { IRequestDetails } from "entities/Request";

export interface IRequest {
  _id: string;
  requestNumber: number;
  patientId: string;
  requestDetails: IRequestDetails[];
}
