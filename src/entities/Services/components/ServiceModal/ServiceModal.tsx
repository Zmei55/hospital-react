import {
  SearchModalHeaderEl,
  SearchFilterEl,
  SearchSelectedListEl,
  deleteService,
  handleClearForm,
  useAddService,
  useSavedServicesList,
  useServicesFilter,
  useToggleServicesModal,
} from "entities/Services";
import { useInput, Modal, Button as ResetBtn, Button as SaveBtn } from "shared";

import {
  ModalBody,
  Form,
  SelectedServicesBox,
  SelectedServicesTitle,
  ButtonsBox,
} from "./ServiceModal.styled";

interface IServiceModal {}

export const ServiceModalEl: React.FC<IServiceModal> = () => {
  const [filter, setFilter, handleFilter] = useInput("");
  const { visibleServices, setVisibleServices } = useServicesFilter(filter, []);
  const { selectedServices, setSelectedServices, addService } = useAddService();
  const { setSavedServicesList } = useSavedServicesList();
  const { toggleModal } = useToggleServicesModal();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();

    setSavedServicesList(selectedServices);
    toggleModal();
  };

  return (
    <Modal width="1574px" height="890px" onClose={() => toggleModal()}>
      <SearchModalHeaderEl toggleModal={toggleModal} />

      <ModalBody>
        <Form onSubmit={handleSubmit}>
          <SearchFilterEl
            filter={filter}
            handleFilter={handleFilter}
            visibleServices={visibleServices}
            addService={addService}
          />

          <SelectedServicesBox>
            <SelectedServicesTitle>Ausgewählte Dienste</SelectedServicesTitle>

            <SearchSelectedListEl
              selectedServices={selectedServices}
              deleteService={deleteService}
              setSelectedServices={setSelectedServices}
            />

            <ButtonsBox>
              <ResetBtn
                width="208px"
                height="72px"
                background="grey"
                onClick={() =>
                  handleClearForm(
                    setFilter,
                    setVisibleServices,
                    setSelectedServices
                  )
                }
              >
                Abbruch
              </ResetBtn>

              <SaveBtn
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
