import { useState, useEffect } from 'react';
import { useAppSelector } from 'types';
import { servicesList } from 'Data';
import { Modal } from 'components/Modal';

import {
  ModalBtn,
  IconServicesAdd,
  ModalBtnTitle,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  CloseBtn,
  IconCross,
} from './ServicesSearch.styled';

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
  const [filter, setFilter] = useState<string>('');
  const [visibleServices, setVisibleServices] = useState<TServicesList>([]);
  const [selectedServices, setSelectedServices] = useState<TServicesList>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    if (filter !== '') {
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
    setFilter('');
    setVisibleServices([]);
    setSelectedServices([]);
    toggleModal();
  };

  const handleClearForm: React.MouseEventHandler<HTMLButtonElement> = () => {
    setFilter('');
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
    setFilter('');
    setVisibleServices([]);
  };

  return (
    <>
      <ModalBtn
        type="button"
        onClick={toggleModal}
        disabled={patient._id === ''}
      >
        <IconServicesAdd />
        <ModalBtnTitle>Fügen Sie Dienste hinzu</ModalBtnTitle>
      </ModalBtn>

      {showModal && (
        <Modal onClose={toggleModal}>
          <ModalContainer>
            <ModalHeader>
              <ModalTitle>Add service</ModalTitle>
              <CloseBtn onClick={toggleModal}>
                <IconCross />
              </CloseBtn>
            </ModalHeader>

            <form onSubmit={handleSubmit}>
              <div>
                <label>
                  <input type="text" value={filter} onChange={handleFilter} />
                  <button type="button">Finden</button>
                </label>
                <ul>
                  {visibleServices.map(service => (
                    <li key={service.codeService}>
                      {service.name}
                      <button type="button" onClick={() => addService(service)}>
                        Ergänzen
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Ausgewählte Dienste</h4>
                <ul>
                  {selectedServices.map(service => (
                    <li key={service.codeService}>
                      <button
                        type="button"
                        onClick={() => deleteService(service.codeService)}
                      >
                        Löschen
                      </button>
                      {service.name}
                    </li>
                  ))}
                </ul>
                <button type="button" onClick={handleClearForm}>
                  Stornieren
                </button>
                <button type="submit">Speichern und schließen</button>
              </div>
            </form>
          </ModalContainer>
        </Modal>
      )}
    </>
  );
};
