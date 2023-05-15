import { LaborTableEl } from "entities/Labor";
import { useSavedServicesList } from "entities/Services";
import {
  Modal,
  Button as CloseBtn,
  Button as ResetBtn,
  Button as SaveBtn,
  Icon,
} from "shared";

import { Header, HeaderTitle, Form, ButtonsBox } from "./LaborModalEl.styled";

interface ILaborModalEl {
  toggleLaborModal: () => void;
}

export const LaborModalEl: React.FC<ILaborModalEl> = ({ toggleLaborModal }) => {
  const { savedServicesList, handleLaborChange } = useSavedServicesList();

  const formSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();
    toggleLaborModal();
  };

  return (
    <>
      <Modal width="1282px" height="712px">
        <Header>
          <HeaderTitle>Wahl des Auftragsempfänger</HeaderTitle>

          <CloseBtn
            id="closeModalSerBtn"
            width="72px"
            height="72px"
            background="red"
            onClick={() => toggleLaborModal()}
          >
            <Icon icon="cross" size={48} color="white" />
          </CloseBtn>
        </Header>

        <Form onSubmit={formSubmit}>
          <LaborTableEl
            savedServicesList={savedServicesList}
            handleLaborChange={handleLaborChange}
          />

          <ButtonsBox>
            <ResetBtn
              id="resetSelectedSerBtn"
              width="208px"
              height="72px"
              background="grey"
              // onClick={() =>
              //   handleClearForm()
              // }
            >
              Abbruch
            </ResetBtn>

            <SaveBtn
              id="saveSelectedSerBtn"
              type="submit"
              width="318px"
              height="72px"
              background="blue"
            >
              Speichern und schließen
            </SaveBtn>
          </ButtonsBox>
        </Form>
      </Modal>
    </>
  );
};
