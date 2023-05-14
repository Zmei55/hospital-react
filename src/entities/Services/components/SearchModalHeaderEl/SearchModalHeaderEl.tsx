import { Button as CloseBtn, Icon } from "shared";

import { ModalHeader, ModalTitle } from "./SearchModalHeaderEl.styled";

interface ISearchModalHeader {
  toggleServicesModal: () => void;
}

export const SearchModalHeaderEl: React.FC<ISearchModalHeader> = ({
  toggleServicesModal,
}) => {
  return (
    <ModalHeader>
      <ModalTitle>Dienst hinzufügen</ModalTitle>

      <CloseBtn
        id="closeModalSerBtn"
        width="72px"
        height="72px"
        background="red"
        onClick={() => toggleServicesModal()}
      >
        <Icon icon="cross" size={48} color="white" />
      </CloseBtn>
    </ModalHeader>
  );
};
