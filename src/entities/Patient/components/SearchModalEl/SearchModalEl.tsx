import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import {
  useTogglePatientsModal,
  usePatientListFind,
  useChoosePatient,
  ISearchPatientState,
} from "entities/Patient";
import {
  Button as ResetBtn,
  Button as FindBtn,
  Button as CloseBtn,
  Icon,
  InputEl,
  SpinnerCenterBox,
  Spinner,
  showBirthDate,
  NotFound,
} from "shared";

import {
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalBody,
  Form,
  Label,
  List,
  ListHeader,
  HeadName,
  HeadBirthDay,
  HeadCardNumber,
  HeadSelectBtn,
  ListBody,
  ListItem,
  BodyName,
  BodyBirthDay,
  BodyCardNumber,
  BodySelectBtn,
  SelectBtn,
} from "./SearchModalEl.styled";

interface ISearchModalForm {}

export const SearchModalEl: React.FC<ISearchModalForm> = () => {
  const {
    patientList,
    handlePatientListFind,
    isLoading,
    isError,
    resetPatients,
  } = usePatientListFind();
  const { register, handleSubmit } = useForm<ISearchPatientState>({
    defaultValues: {
      name: undefined,
      birthDate: undefined,
      cardNumber: undefined,
    },
  });
  const { choosePatient } = useChoosePatient();
  const { togglePatientsModal } = useTogglePatientsModal();
  const { t } = useTranslation();

  const handleResetBtn = () => {
    resetPatients();
  };

  const handleCloseBtn = () => {
    resetPatients();
    togglePatientsModal();
  };

  return (
    <ModalContainer data-testid="patient-search">
      <ModalHeader data-testid="patient-search-header">
        <ModalTitle data-testid="patient-search-title">
          {t("patient.title")}
        </ModalTitle>

        <ResetBtn
          data-testid="reset-search-patient-btn"
          style={{
            height: "72px",
            paddingRight: "44px",
            paddingLeft: "44px",
            marginRight: "24px",
          }}
          background="transparent"
          onClick={handleResetBtn}
        >
          {t("shared.button.reset")}
        </ResetBtn>

        <FindBtn
          data-testid="find-search-patient-btn"
          type="submit"
          form="patient-search-form"
          style={{
            height: "72px",
            paddingRight: "44px",
            paddingLeft: "44px",
            marginRight: "24px",
          }}
          background="blue"
        >
          {t("shared.button.find")}
        </FindBtn>

        <CloseBtn
          data-testid="close-search-patient-btn"
          background="red"
          style={{
            width: "72px",
            height: "72px",
          }}
          onClick={handleCloseBtn}
        >
          <Icon icon="cross" size={48} color="white" />
        </CloseBtn>
      </ModalHeader>

      <ModalBody data-testid="patient-search-body">
        <Form
          data-testid="patient-search-form"
          id="patient-search-form"
          onSubmit={handleSubmit(handlePatientListFind)}
        >
          <Label>
            <InputEl
              {...register("name")}
              data-testid="patient-search-name-input"
              autoFocus
              style={{ width: "100%" }}
              placeholder={t("patient.name")}
            />
          </Label>

          <Label>
            <InputEl
              type="date"
              {...register("birthDate")}
              data-testid="patient-search-birthday-input"
              style={{ width: "100%" }}
              placeholder={t("patient.dateOfBirth")}
            />
          </Label>

          <Label>
            <InputEl
              {...register("cardNumber")}
              data-testid="patient-search-card-number-input"
              style={{ width: "100%" }}
              placeholder={t("patient.cardNumber")}
            />
          </Label>
        </Form>

        {isLoading && (
          <SpinnerCenterBox>
            <Spinner size={80} />
          </SpinnerCenterBox>
        )}

        {!isLoading && patientList && (
          <List data-testid="patient-search-list">
            <ListHeader data-testid="patient-search-list-header">
              <HeadName>{t("patient.name")}</HeadName>
              <HeadBirthDay>{t("patient.dateOfBirth")}</HeadBirthDay>
              <HeadCardNumber>{t("patient.cardNumber")}</HeadCardNumber>
              <HeadSelectBtn></HeadSelectBtn>
            </ListHeader>

            <ListBody data-testid="patient-search-list-body">
              {patientList.map(patient => (
                <ListItem
                  key={patient._id}
                  data-testid="patient-search-listitem"
                >
                  <BodyName>{patient.name}</BodyName>
                  <BodyBirthDay>
                    {showBirthDate(patient.birthDate)}
                  </BodyBirthDay>
                  <BodyCardNumber>{patient.cardNumber}</BodyCardNumber>
                  <BodySelectBtn>
                    <SelectBtn
                      id="selectPatLink"
                      onClick={() => choosePatient(patient._id)}
                    >
                      {t("shared.button.select")}
                    </SelectBtn>
                  </BodySelectBtn>
                </ListItem>
              ))}
            </ListBody>
          </List>
        )}

        {!isLoading && isError && (
          <NotFound data-testid="patient-search-not-found">
            {t("patient.NotFoundPatientText")}
          </NotFound>
        )}
      </ModalBody>
    </ModalContainer>
  );
};
