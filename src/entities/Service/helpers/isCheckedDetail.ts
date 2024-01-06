import { TDetails, TNewDetails } from "entities/Request";

export const isCheckedDetail = (
  serviceId: string | number,
  laborId: string | number,
  detailsState: TDetails[] | TNewDetails[] | null
) => {
  if (detailsState)
    for (const detail of detailsState) {
      if (detail.serviceId === serviceId && detail.laborId === laborId) {
        return true;
      }
    }
};
