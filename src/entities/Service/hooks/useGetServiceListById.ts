import { useGetServiceById, TService } from "entities/Service";
import { TDetails } from "entities/Request";

export const useGetServiceListById = () => {
  const { getServiceById } = useGetServiceById();

  const getServiceList = async (details: TDetails[]) => {
    const servicesArray: TService[] = [];

    for (const detail of details) {
      const service = await getServiceById(detail.serviceId);
      servicesArray.push(service);
    }

    return servicesArray;
  };

  return { getServiceList };
};
