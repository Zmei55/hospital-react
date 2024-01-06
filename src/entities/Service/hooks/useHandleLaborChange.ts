import { useState } from "react";
import { addDetails, useToggleLaborModal } from "entities/Service";
import { TNewDetails } from "entities/Request";
import { useAppSelector, useAppDispatch } from "shared";

export const useHandleLaborChange = () => {
  const dispatch = useAppDispatch();
  const details = useAppSelector(state => state.services.details);
  const [detailsState, setDetailsState] = useState<TNewDetails[] | null>(
    details
  );
  const { toggleLaborModal } = useToggleLaborModal();

  const uniqueObjectByServiceId = (
    array: TNewDetails[],
    checkedValue: string | number,
    mutabeleValue: string | number
  ) => {
    let newArray = array.slice();

    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i].serviceId === checkedValue) {
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
    target: { name: string | number; value: string | number };
  }) => {
    if (!detailsState) {
      setDetailsState([{ serviceId: name, laborId: value }]);
    }
    if (detailsState) {
      uniqueObjectByServiceId(detailsState, name, value);
    }
  };

  const saveDetails = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (detailsState) {
      dispatch(addDetails(detailsState));
      toggleLaborModal();
    } else {
      return null;
    }
  };

  return { handleLaborChange, saveDetails, detailsState };
};
