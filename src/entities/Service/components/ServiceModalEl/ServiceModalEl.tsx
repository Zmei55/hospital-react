import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import {
  useToggleServicesModal,
  useHandleServicesForm,
  useServiceAdd,
  useSelectedServiceDelete,
  useSelectedServiceListSave,
  useSelectedServiceListClear,
  TServiceFilter,
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
  Filter,
  Form,
  Input,
  SelectedServicesBox,
  SelectedServicesTitle,
  ButtonsBox,
  FilteredList,
  FilteredItem,
  FilteredNameBox,
  FilteredCodeService,
  FilteredNameService,
  AddServiceBtnTitle,
  SecondaryBlock,
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
  } = useForm<TServiceFilter>({
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
  const { t } = useTranslation();

  return (
    <Modal onClose={() => toggleServicesModal()}>
      <ModalHeader data-testid="services-modal-header">
        <ModalTitle>{t("service.modalTitle")}</ModalTitle>

        <CloseBtn
          data-testid="close-modal-services-btn"
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

      <ModalBody data-testid="services-modal-body">
        <Filter data-testid="services-modal-filter">
          <Form
            data-testid="services-modal-filter-form"
            onSubmit={handleSubmit(handleServicesForm)}
          >
            <Input
              {...register("filter")}
              data-testid="services-modal-filter-input"
              placeholder={t("service.filterPlaceholder")}
              autoFocus
              required
            />

            <FindBtn
              data-testid="find-service-btn"
              type="submit"
              background="blue"
              style={{
                width: "162px",
                height: "72px",
                marginLeft: "24px",
              }}
              disabled={!dirtyFields.filter}
            >
              {isLoading ? (
                <Spinner data-testid="spinner" />
              ) : (
                <span data-testid="find-service-btn-text">
                  {t("shared.button.find")}
                </span>
              )}
            </FindBtn>
          </Form>

          {filteredServicesList && (
            <FilteredList data-testid="services-modal-filter-list">
              {filteredServicesList.map(service => (
                <FilteredItem
                  data-testid="services-modal-filter-listitem"
                  key={service._id}
                >
                  <FilteredNameBox data-testid="services-modal-filter-name-box">
                    <FilteredCodeService data-testid="services-modal-filter-code">
                      {service.code}
                    </FilteredCodeService>
                    <FilteredNameService data-testid="services-modal-filter-name">
                      {service.name}
                    </FilteredNameService>
                  </FilteredNameBox>

                  <AddServiceBtn
                    data-testid="add-service-btn"
                    background="transparent"
                    style={{
                      height: "88px",
                      paddingRight: "44px",
                      paddingLeft: "44px",
                    }}
                    onClick={() => addService(service)}
                  >
                    <IconPlus icon="plus-bold" size={24} color="blue" />
                    <AddServiceBtnTitle>
                      {t("shared.button.add")}
                    </AddServiceBtnTitle>
                  </AddServiceBtn>
                </FilteredItem>
              ))}
            </FilteredList>
          )}
        </Filter>

        <SecondaryBlock>
          <SelectedServicesBox data-testid="services-modal-selected">
            <SelectedServicesTitle data-testid="services-modal-selected-title">
              {t("service.servicesSelected")}
            </SelectedServicesTitle>

            {selectedServicesList && (
              <SelectedServicesList data-testid="services-modal-selected-list">
                {selectedServicesList.map(service => (
                  <SelectedServicesItem
                    data-testid="services-modal-selected-listitem"
                    key={service.code}
                  >
                    <DeleteBtn
                      data-testid="delete-selected-service-btn"
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

                    <SelectedServicesNameBox data-testid="services-modal-selected-name-box">
                      <SelectedServicesCode data-testid="services-modal-selected-code">
                        {service.code}
                      </SelectedServicesCode>

                      <SelectedServicesName data-testid="services-modal-selected-name">
                        {service.name}
                      </SelectedServicesName>
                    </SelectedServicesNameBox>
                  </SelectedServicesItem>
                ))}
              </SelectedServicesList>
            )}
          </SelectedServicesBox>

          <ButtonsBox data-testid="services-modal-buttons">
            <ResetBtn
              data-testid="reset-selected-services-btn"
              background="grey"
              style={{
                width: "208px",
                height: "72px",
                marginRight: "24px",
              }}
              onClick={clearSelectedList}
              disabled={!selectedServicesList}
            >
              {t("shared.button.abort")}
            </ResetBtn>

            <SaveBtn
              data-testid="save-selected-services-btn"
              background="blue"
              style={{
                width: "318px",
                height: "72px",
              }}
              onClick={saveSelectedList}
              disabled={!selectedServicesList}
            >
              {t("shared.button.saveAndCancel")}
            </SaveBtn>
          </ButtonsBox>
        </SecondaryBlock>
      </ModalBody>
    </Modal>
  );
};
