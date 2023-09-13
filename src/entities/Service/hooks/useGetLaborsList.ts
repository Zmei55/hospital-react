import { useLazyFetchLaborsListQuery, addLabors } from "entities/Service";
import { useAppDispatch } from "shared";

export const useGetLaborsList = () => {
  const dispatch = useAppDispatch();
  const [fetchLabors] = useLazyFetchLaborsListQuery();

  const fetchLaborList = async () => {
    const laborListResponse = await fetchLabors(null).unwrap();
    dispatch(addLabors(laborListResponse));
  };

  return { fetchLaborList };
};
