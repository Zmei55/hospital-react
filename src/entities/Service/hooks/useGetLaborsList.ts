import { useFetchLaborsListQuery, fetchLabors } from "entities/Service";
import { useAppDispatch } from "shared";

export const useGetLaborsList = () => {
  const dispatch = useAppDispatch();
  const { data: laborsList } = useFetchLaborsListQuery(null);

  const fetchLaborsList = () => {
    if (laborsList?.length) {
      dispatch(fetchLabors(laborsList));
    }
  };

  return { fetchLaborsList };
};
