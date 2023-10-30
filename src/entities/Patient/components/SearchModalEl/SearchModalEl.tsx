import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import {
  useTogglePatientsModal,
  usePatientsListFind,
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
  NotFoundText,
} from "./SearchModalEl.styled";

interface ISearchModalForm {}

export const SearchModalEl: React.FC<ISearchModalForm> = () => {
  const {
    patientList,
    handlePatientsListFind,
    isLoading,
    isError,
    resetPatients,
  } = usePatientsListFind();
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
    <ModalContainer>
      <ModalHeader>
        <ModalTitle>{t("patient.title")}</ModalTitle>

        <ResetBtn
          id="resetSearchPatBtn"
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
          id="findSearchPatBtn"
          type="submit"
          form="findPatientList"
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
          id="closeSearchPatBtn"
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

      <ModalBody>
        <Form
          id="findPatientList"
          onSubmit={handleSubmit(handlePatientsListFind)}
        >
          <Label>
            <InputEl
              {...register("name")}
              autoFocus
              style={{ width: "100%" }}
              placeholder={t("patient.name")}
            />
          </Label>

          <Label>
            <InputEl
              type="date"
              {...register("birthDate")}
              style={{ width: "100%" }}
              placeholder={t("patient.dateOfBirth")}
            />
          </Label>

          <Label>
            <InputEl
              {...register("cardNumber")}
              style={{ width: "100%" }}
              placeholder={t("patient.cardNumber")}
            />
          </Label>
        </Form>

        {isLoading ? (
          <SpinnerCenterBox>
            <Spinner size={80} />
          </SpinnerCenterBox>
        ) : (
          <>
            {patientList.length > 0 && (
              <List>
                <ListHeader>
                  <HeadName>{t("patient.name")}</HeadName>
                  <HeadBirthDay>{t("patient.dateOfBirth")}</HeadBirthDay>
                  <HeadCardNumber>{t("patient.cardNumber")}</HeadCardNumber>
                  <HeadSelectBtn></HeadSelectBtn>
                </ListHeader>

                <ListBody>
                  {patientList.map(patient => (
                    <ListItem key={patient._id}>
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

            {isError && (
              <NotFoundText>{t("patient.NotFoundPatientText")}</NotFoundText>
            )}
          </>
        )}
      </ModalBody>
    </ModalContainer>
  );
};
