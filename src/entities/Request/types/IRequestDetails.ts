import { IService } from "entities/Service";
import { ILabor } from "entities/Service";

export interface IRequestDetails {
  _id: string;
  serviceId: IService;
  laborId: ILabor;
  completed: boolean;
}
