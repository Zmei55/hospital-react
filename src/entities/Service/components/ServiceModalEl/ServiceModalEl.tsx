import {
  ServiceModalHeaderEl,
  SearchFilterEl,
  SearchFilteredListEl,
  SearchSelectedListEl,
  useToggleServicesModal,
  useHandleServicesForm,
} from "entities/Service";
import { Modal, Button as ResetBtn, Button as SaveBtn } from "shared";

import {
  ModalBody,
  Form,
  Filter,
  SelectedServicesBox,
  SelectedServicesTitle,
  ButtonsBox,
} from "./ServiceModalEL.styled";

interface IServiceModal {}

export const ServiceModalEl: React.FC<IServiceModal> = () => {
  const { handleServicesForm } = useHandleServicesForm();
  const { toggleServicesModal } = useToggleServicesModal();

  return (
    <Modal width="1574px" height="890px" onClose={() => toggleServicesModal()}>
      <ServiceModalHeaderEl toggleServicesModal={toggleServicesModal} />

      <ModalBody>
        <Form onSubmit={handleServicesForm}>
          <Filter>
            <SearchFilterEl />

            <SearchFilteredListEl />
          </Filter>

          <SelectedServicesBox>
            <SelectedServicesTitle>Ausgewählte Dienste</SelectedServicesTitle>

            <SearchSelectedListEl />

            <ButtonsBox>
              <ResetBtn
                id="resetSelectedSerBtn"
                width="208px"
                height="72px"
                background="grey"
                marginRight="24px"
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
          </SelectedServicesBox>
        </Form>
      </ModalBody>
    </Modal>
  );
};
