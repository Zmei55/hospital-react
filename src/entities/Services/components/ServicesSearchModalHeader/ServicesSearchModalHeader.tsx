import { IService } from "entities/Services";
import { Button as CloseBtn, Icon } from "shared";

import { ModalHeader, ModalTitle } from "./ServicesSearchModalHeader.styled";

interface IServicesSearchModalHeader {
  toggleModal: (
    setFilter: (value: React.SetStateAction<string>) => void,
    setVisibleServices: (value: React.SetStateAction<IService[]>) => void
  ) => void;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  setVisibleServices: React.Dispatch<React.SetStateAction<IService[]>>;
}

export const ServicesSearchModalHeader: React.FC<
  IServicesSearchModalHeader
> = ({ toggleModal, setFilter, setVisibleServices }) => {
  return (
    <ModalHeader>
      <ModalTitle>Dienst hinzufügen</ModalTitle>

      <CloseBtn
        width="72px"
        height="72px"
        background="red"
        onClick={() => toggleModal(setFilter, setVisibleServices)}
      >
        <Icon icon="cross" size={48} color="white" />
      </CloseBtn>
    </ModalHeader>
  );
};
