import { useGetServiceById, IDetail, IService } from "entities/Service";

export const useGetServiceListById = () => {
  const { getServiceById } = useGetServiceById();

  const getServiceList = async (details: IDetail[]) => {
    const servicesArray: IService[] = [];

    for (const detail of details) {
      const service = await getServiceById(detail.serviceId);
      servicesArray.push(service);
    }

    return servicesArray;
  };

  return { getServiceList };
};
