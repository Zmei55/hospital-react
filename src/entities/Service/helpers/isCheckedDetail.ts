import { IDetail } from "entities/Service";

export const isCheckedDetail = (
  serviceId: string | number,
  laborId: string | number,
  detailsState: IDetail[]
) => {
  for (const detail of detailsState) {
    if (detail.serviceId === serviceId && detail.laborId === laborId) {
      return true;
    }
  }
};
