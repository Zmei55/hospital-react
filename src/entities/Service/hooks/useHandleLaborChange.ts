import { useState } from "react";
import { addDetails, IDetail, useToggleLaborModal } from "entities/Service";
import { addRequestDetails } from "entities/Request";
import { useAppSelector, useAppDispatch } from "shared";

export const useHandleLaborChange = () => {
  const dispatch = useAppDispatch();
  const details = useAppSelector(state => state.services.details);
  const [detailsState, setDetailsState] = useState<IDetail[]>(details);
  const { toggleLaborModal } = useToggleLaborModal();

  const uniqueObjectByServiceId = (
    array: IDetail[],
    checkedValue: string,
    mutabeleValue: string
  ) => {
    let newArray = array.slice();
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i].serviceId.includes(checkedValue)) {
        newArray[i] = { ...newArray[i], laborId: mutabeleValue };
        return setDetailsState(newArray);
      }
    }
    return setDetailsState([
      ...newArray,
      { serviceId: checkedValue, laborId: mutabeleValue },
    ]);
  };

  const handleLaborChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { name, value },
  }: {
    target: { name: string; value: string };
  }) => {
    if (detailsState.length === 0) {
      setDetailsState([{ serviceId: name, laborId: value }]);
    }
    if (detailsState.length > 0) {
      uniqueObjectByServiceId(detailsState, name, value);
    }
  };

  const saveDetails = (event: React.SyntheticEvent) => {
    event.preventDefault();

    dispatch(addDetails(detailsState));
    dispatch(addRequestDetails(detailsState));
    toggleLaborModal();
  };

  return { handleLaborChange, saveDetails };
};
