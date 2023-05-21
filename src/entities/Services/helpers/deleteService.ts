import { IService } from "entities/Services";

export const deleteService = (
  id: string,
  list: IService[],
  setList: (e: IService[]) => void
) => {
  setList(list.filter(service => service.serviceCode !== id));
};
