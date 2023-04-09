import { useAppSelector } from "shared";
import {
  useServicesFilter,
  useAddService,
  useToggleModal,
  deleteService,
  handleClearForm,
  IServicesSearch,
} from "entities/Services";
import { Modal, useInput } from "shared";

import {
  ModalBtn,
  IconServicesAdd,
  ModalBtnTitle,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  CloseBtn,
  IconCross,
  ModalBody,
  ServiceForm,
  Filter,
  FilterLabel,
  FilterInput,
  FilteredList,
  FilteredItem,
  FilteredNameBox,
  FilteredCodeService,
  FilteredNameService,
  AddServiceBtn,
  IconPlus,
  AddServiceBtnTitle,
  SelectedServicesBox,
  SelectedServicesTitle,
  SelectedServicesList,
  SelectedServicesItem,
  DeleteSelectedServicesBtn,
  IconTrash,
  SelectedServicesNameBox,
  SelectedServicesCode,
  SelectedServicesName,
  ResetFormBtn,
  SaveServicesBtn,
} from "./ServicesSearch.styled";

export const ServicesSearch = ({ setSavedServicesList }: IServicesSearch) => {
  const patient = useAppSelector(state => state.patient.patient);
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
      <ModalBtn
        type="button"
        onClick={() => toggleModal(setFilter, setVisibleServices)}
        disabled={patient._id === ""}
      >
        <IconServicesAdd />
        {patient._id === "" ? (
          <ModalBtnTitle>
            Dienste können nach Auswahl eines Patienten hinzugefügt werden
          </ModalBtnTitle>
        ) : (
          <ModalBtnTitle>Fügen Sie Dienste hinzu</ModalBtnTitle>
        )}
      </ModalBtn>

      {showModal && (
        <Modal onClose={() => toggleModal(setFilter, setVisibleServices)}>
          <ModalContainer>
            <ModalHeader>
              <ModalTitle>Dienst hinzufügen</ModalTitle>
              <CloseBtn
                onClick={() => toggleModal(setFilter, setVisibleServices)}
              >
                <IconCross />
              </CloseBtn>
            </ModalHeader>

            <ModalBody>
              <ServiceForm onSubmit={handleSubmit}>
                <Filter>
                  <FilterLabel>
                    <FilterInput
                      type="text"
                      value={filter}
                      onChange={handleFilter}
                      autoFocus
                      placeholder="Dienstname"
                    />
                  </FilterLabel>
                  <FilteredList>
                    {visibleServices.map(service => (
                      <FilteredItem key={service.codeService}>
                        <FilteredNameBox>
                          <FilteredCodeService>
                            {service.codeService}
                          </FilteredCodeService>
                          <FilteredNameService>
                            {service.name}
                          </FilteredNameService>
                        </FilteredNameBox>

                        <AddServiceBtn
                          type="button"
                          onClick={() => addService(service)}
                        >
                          <IconPlus />
                          <AddServiceBtnTitle>Hinzufügen</AddServiceBtnTitle>
                        </AddServiceBtn>
                      </FilteredItem>
                    ))}
                  </FilteredList>
                </Filter>

                <SelectedServicesBox>
                  <SelectedServicesTitle>
                    Ausgewählte Dienste
                  </SelectedServicesTitle>
                  <SelectedServicesList>
                    {selectedServices.map(service => (
                      <SelectedServicesItem key={service.codeService}>
                        <DeleteSelectedServicesBtn
                          type="button"
                          onClick={() =>
                            deleteService(
                              service.codeService,
                              selectedServices,
                              setSelectedServices
                            )
                          }
                        >
                          <IconTrash />
                        </DeleteSelectedServicesBtn>
                        <SelectedServicesNameBox>
                          <SelectedServicesCode>
                            {service.codeService}
                          </SelectedServicesCode>
                          <SelectedServicesName>
                            {service.name}
                          </SelectedServicesName>
                        </SelectedServicesNameBox>
                      </SelectedServicesItem>
                    ))}
                  </SelectedServicesList>
                  <ResetFormBtn
                    type="button"
                    onClick={() =>
                      handleClearForm(
                        setFilter,
                        setVisibleServices,
                        setSelectedServices
                      )
                    }
                  >
                    Stornieren
                  </ResetFormBtn>
                  <SaveServicesBtn type="submit">
                    Speichern und schließen
                  </SaveServicesBtn>
                </SelectedServicesBox>
              </ServiceForm>
            </ModalBody>
          </ModalContainer>
        </Modal>
      )}
    </>
  );
};
