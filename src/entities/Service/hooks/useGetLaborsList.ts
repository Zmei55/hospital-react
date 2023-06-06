import { useFetchLaborsListQuery, fetchLabors } from "entities/Service";
import { useAppDispatch, useAppSelector } from "shared";

export const useGetLaborsList = () => {
  const dispatch = useAppDispatch();
  const { data: laborsList } = useFetchLaborsListQuery(null);
  // const labors = useAppSelector(state => state.services.labors);

  // if (laborsList?.length) {
  //   dispatch(fetchLabors(laborsList));
  // }

  const fetchLaborsList = () => {
    if (laborsList?.length) {
      dispatch(fetchLabors(laborsList));
    }
  };

  return { fetchLaborsList };
};
