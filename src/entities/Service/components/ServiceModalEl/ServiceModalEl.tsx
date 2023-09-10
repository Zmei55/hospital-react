import { useForm } from "react-hook-form";
import {
  useToggleServicesModal,
  useHandleServicesForm,
  useServiceAdd,
  useSelectedServiceDelete,
  useSelectedServiceListSave,
  useSelectedServiceListClear,
  IFilter,
} from "entities/Service";
import {
  Modal,
  Button as ResetBtn,
  Button as SaveBtn,
  Button as FindBtn,
  Button as AddServiceBtn,
  Button as DeleteBtn,
  Button as CloseBtn,
  Icon as IconPlus,
  Icon as IconTrash,
  Icon as IconCross,
  Spinner,
  useAppSelector,
} from "shared";

import {
  ModalHeader,
  ModalTitle,
  ModalBody,
  FormFilter,
  Filter,
  FilterInput,
  SelectedServicesBox,
  SelectedServicesTitle,
  ButtonsBox,
  FilteredList,
  FilteredItem,
  FilteredNameBox,
  FilteredCodeService,
  FilteredNameService,
  AddServiceBtnTitle,
  SelectedServicesList,
  SelectedServicesItem,
  SelectedServicesNameBox,
  SelectedServicesCode,
  SelectedServicesName,
} from "./ServiceModalEL.styled";

interface IServiceModal {}

export const ServiceModalEl: React.FC<IServiceModal> = () => {
  const {
    register,
    handleSubmit,
    formState: { dirtyFields },
  } = useForm<IFilter>({
    defaultValues: {
      filter: undefined,
    },
  });
  const { handleServicesForm, filteredServicesList, isLoading } =
    useHandleServicesForm();
  const selectedServicesList = useAppSelector(
    state => state.services.selectedServices
  );
  const { addService } = useServiceAdd();
  const { removeSelectedService } = useSelectedServiceDelete();
  const { saveSelectedList } = useSelectedServiceListSave();
  const { clearSelectedList } = useSelectedServiceListClear();
  const { toggleServicesModal } = useToggleServicesModal();

  return (
    <Modal width="1574px" height="890px" onClose={() => toggleServicesModal()}>
      <ModalHeader>
        <ModalTitle>Dienst hinzufügen</ModalTitle>

        <CloseBtn
          id="closeModalSerBtn"
          background="red"
          style={{
            width: "72px",
            height: "72px",
          }}
          onClick={() => toggleServicesModal()}
        >
          <IconCross icon="cross" size={48} color="white" />
        </CloseBtn>
      </ModalHeader>

      <ModalBody>
        <Filter>
          <FormFilter onSubmit={handleSubmit(handleServicesForm)}>
            <FilterInput
              {...register("filter")}
              placeholder="Dienstname"
              autoFocus
              required
            />

            <FindBtn
              id="findSearchPatBtn"
              type="submit"
              background="blue"
              style={{
                width: "162px",
                height: "72px",
                marginLeft: "24px",
              }}
              disabled={!dirtyFields.filter}
            >
              {isLoading ? <Spinner /> : <span>Finden</span>}
            </FindBtn>
          </FormFilter>

          <FilteredList>
            {filteredServicesList.map(service => (
              <FilteredItem key={service._id}>
                <FilteredNameBox>
                  <FilteredCodeService>{service.code}</FilteredCodeService>
                  <FilteredNameService>{service.name}</FilteredNameService>
                </FilteredNameBox>

                <AddServiceBtn
                  id="addSerBtn"
                  background="transparent"
                  style={{
                    height: "88px",
                    paddingRight: "44px",
                    paddingLeft: "44px",
                  }}
                  onClick={() => addService(service)}
                >
                  <IconPlus icon="plus-bold" size={24} color="blue" />
                  <AddServiceBtnTitle>Hinzufügen</AddServiceBtnTitle>
                </AddServiceBtn>
              </FilteredItem>
            ))}
          </FilteredList>
        </Filter>

        <SelectedServicesBox>
          <SelectedServicesTitle>Ausgewählte Dienste</SelectedServicesTitle>

          <SelectedServicesList>
            {selectedServicesList.map(service => (
              <SelectedServicesItem key={service.code}>
                <DeleteBtn
                  id="delSelectedSerBtn"
                  background="transparent"
                  style={{
                    width: "56px",
                    height: "56px",
                    border: "none",
                    marginRight: "24px",
                  }}
                  onClick={() => removeSelectedService(service._id)}
                >
                  <IconTrash icon="trash" size={48} color="red" />
                </DeleteBtn>

                <SelectedServicesNameBox>
                  <SelectedServicesCode>{service.code}</SelectedServicesCode>

                  <SelectedServicesName>{service.name}</SelectedServicesName>
                </SelectedServicesNameBox>
              </SelectedServicesItem>
            ))}
          </SelectedServicesList>

          <ButtonsBox>
            <ResetBtn
              id="resetSelectedSerBtn"
              background="grey"
              style={{
                width: "208px",
                height: "72px",
                marginRight: "24px",
              }}
              onClick={clearSelectedList}
              disabled={selectedServicesList.length === 0}
            >
              Abbruch
            </ResetBtn>

            <SaveBtn
              id="saveSelectedSerBtn"
              background="blue"
              style={{
                width: "318px",
                height: "72px",
              }}
              onClick={saveSelectedList}
              disabled={selectedServicesList.length === 0}
            >
              Speichern und schließen
            </SaveBtn>
          </ButtonsBox>
        </SelectedServicesBox>
      </ModalBody>
    </Modal>
  );
};
