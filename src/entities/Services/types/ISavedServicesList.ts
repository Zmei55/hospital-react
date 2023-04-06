import { IService } from "./IService";
import { TServicesList } from "./TServicesList";

export interface ISavedServicesList {
  savedServicesList: IService[];
  setSavedServicesList(e: TServicesList): void;
}
