import { Button as CloseBtn, Icon } from "shared";

import { ModalHeader, ModalTitle } from "./ServicesSearchModalHeader.styled";

interface IServicesSearchModalHeader {
  toggleModal: () => void;
}

export const ServicesSearchModalHeader: React.FC<
  IServicesSearchModalHeader
> = ({ toggleModal }) => {
  return (
    <ModalHeader>
      <ModalTitle>Dienst hinzufügen</ModalTitle>

      <CloseBtn
        width="72px"
        height="72px"
        background="red"
        onClick={() => toggleModal()}
      >
        <Icon icon="cross" size={48} color="white" />
      </CloseBtn>
    </ModalHeader>
  );
};
