import {
  ServicesSearchModalBtn,
  ServicesSearchModalHeader,
  ServicesSearchFilter,
  ServicesSearchSelectedList,
  useServicesFilter,
  useAddService,
  useToggleModal,
  deleteService,
  handleClearForm,
  IService,
} from "entities/Services";
import { Modal, useInput, Button as ResetBtn, Button as SaveBtn } from "shared";

import {
  ModalBody,
  ServiceForm,
  SelectedServicesBox,
  SelectedServicesTitle,
  ButtonsBox,
} from "./ServicesSearch.styled";

interface IServicesSearch {
  setSavedServicesList(e: IService[]): void;
}

export const ServicesSearch = ({ setSavedServicesList }: IServicesSearch) => {
  const [filter, setFilter, handleFilter] = useInput("");
  const { visibleServices, setVisibleServices } = useServicesFilter(filter, []);
  const { selectedServices, setSelectedServices, addService } = useAddService(
    []
  );
  const { showModal, toggleModal } = useToggleModal(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();

    setSavedServicesList(selectedServices);
    setFilter("");
    setVisibleServices([]);
    setSelectedServices([]);
    toggleModal(setFilter, setVisibleServices);
  };

  return (
    <>
      <ServicesSearchModalBtn
        toggleModal={toggleModal}
        setFilter={setFilter}
        setVisibleServices={setVisibleServices}
      />

      {showModal && (
        <Modal
          width="1574px"
          height="890px"
          onClose={() => toggleModal(setFilter, setVisibleServices)}
        >
          <ServicesSearchModalHeader
            toggleModal={toggleModal}
            setFilter={setFilter}
            setVisibleServices={setVisibleServices}
          />

          <ModalBody>
            <ServiceForm onSubmit={handleSubmit}>
              <ServicesSearchFilter
                filter={filter}
                handleFilter={handleFilter}
                visibleServices={visibleServices}
                addService={addService}
              />

              <SelectedServicesBox>
                <SelectedServicesTitle>
                  Ausgewählte Dienste
                </SelectedServicesTitle>

                <ServicesSearchSelectedList
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
                    Stornieren
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
            </ServiceForm>
          </ModalBody>
        </Modal>
      )}
    </>
  );
};
