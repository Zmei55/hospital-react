import { useState } from "react";
import { TServicesList } from "entities/Services";

export const useToggleModal = (initialValue: boolean) => {
  const [showModal, setShowModal] = useState(initialValue);

  const toggleModal = (
    filter: (value: React.SetStateAction<string>) => void,
    visServices: (value: React.SetStateAction<TServicesList>) => void
  ) => {
    setShowModal(!showModal);
    filter("");
    visServices([]);
  };

  return { showModal, toggleModal };
};
