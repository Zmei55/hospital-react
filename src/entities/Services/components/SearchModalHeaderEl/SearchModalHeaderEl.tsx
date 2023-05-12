import { Button as CloseBtn, Icon } from "shared";

import { ModalHeader, ModalTitle } from "./SearchModalHeaderEl.styled";

interface ISearchModalHeader {
  toggleModal: () => void;
}

export const SearchModalHeaderEl: React.FC<ISearchModalHeader> = ({
  toggleModal,
}) => {
  return (
    <ModalHeader>
      <ModalTitle>Dienst hinzufügen</ModalTitle>

      <CloseBtn
        id="closeModalSerBtn"
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
