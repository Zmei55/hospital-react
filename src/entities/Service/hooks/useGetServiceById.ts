import { useLazyFetchServiceByIdQuery } from "entities/Service";

export const useGetServiceById = () => {
  const [fetchServiceById] = useLazyFetchServiceByIdQuery();

  const getServiceById = async (id: string) => {
    const serviceResponse = await fetchServiceById(id).unwrap();
    return serviceResponse;
  };

  return { getServiceById };
};
