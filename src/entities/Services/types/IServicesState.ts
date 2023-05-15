import { IService } from "./IService";

export interface IServicesState {
  services: IService[];
  modalService: boolean;
  modalLabor: boolean;
}
