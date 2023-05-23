import { IService } from "entities/Service";

export const deleteService = (
  id: string,
  list: IService[],
  setList: (e: IService[]) => void
) => {
  setList(list.filter(service => service.serviceCode !== id));
};
