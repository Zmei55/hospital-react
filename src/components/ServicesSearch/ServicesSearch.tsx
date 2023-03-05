import { useState, useEffect } from "react";
import { useAppSelector } from "types";
import { servicesList } from "Data";
import { Modal } from "components/Modal";

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

type TService = {
  name: string;
  codeService: string;
};

type TServicesList = TService[];

type TServicesSearchEl = {
  setSavedServicesList(e: TServicesList): void;
};

export const ServicesSearch = ({ setSavedServicesList }: TServicesSearchEl) => {
  const patient = useAppSelector(state => state.app.patient);
  const [filter, setFilter] = useState<string>("");
  const [visibleServices, setVisibleServices] = useState<TServicesList>([]);
  const [selectedServices, setSelectedServices] = useState<TServicesList>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    if (filter !== "") {
      setVisibleServices(
        servicesList.filter(service =>
          service.name.toLowerCase().includes(filter.toLowerCase())
        )
      );
    }
  }, [filter]);

  const handleFilter: React.ChangeEventHandler<HTMLInputElement> = event => {
    setFilter(event.currentTarget.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();
    setSavedServicesList(selectedServices);
    setFilter("");
    setVisibleServices([]);
    setSelectedServices([]);
    toggleModal();
  };

  const handleClearForm: React.MouseEventHandler<HTMLButtonElement> = () => {
    setFilter("");
    setVisibleServices([]);
    setSelectedServices([]);
  };

  const addService = (service: TService) => {
    if (
      selectedServices
        .map(item => item.codeService)
        .indexOf(service.codeService)
    ) {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const deleteService = (codeService: string) => {
    setSelectedServices(
      selectedServices.filter(service => service.codeService !== codeService)
    );
  };

  const toggleModal = () => {
    setShowModal(!showModal);
    setFilter("");
    setVisibleServices([]);
  };

  return (
    <>
      <ModalBtn
        type="button"
        onClick={toggleModal}
        disabled={patient._id === ""}
      >
        <IconServicesAdd />
        <ModalBtnTitle>Fügen Sie Dienste hinzu</ModalBtnTitle>
      </ModalBtn>

      {showModal && (
        <Modal onClose={toggleModal}>
          <ModalContainer>
            <ModalHeader>
              <ModalTitle>Dienst hinzufügen</ModalTitle>
              <CloseBtn onClick={toggleModal}>
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
                          onClick={() => deleteService(service.codeService)}
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
                  <ResetFormBtn type="button" onClick={handleClearForm}>
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
