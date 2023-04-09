import { TServicesList } from "entities/Services";

export const deleteService = (
  id: string,
  list: TServicesList,
  setList: (e: TServicesList) => void
) => {
  setList(list.filter(service => service.codeService !== id));
};
