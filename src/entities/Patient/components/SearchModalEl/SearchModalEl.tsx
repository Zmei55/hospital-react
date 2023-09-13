import { useForm } from "react-hook-form";
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

  const handleResetBtn = () => {
    resetPatients();
  };

  const handleCloseBtn = () => {
    resetPatients();
    togglePatientsModal();
  };

  return (
    <>
      <ModalHeader>
        <ModalTitle>Wählen Sie einen Patient aus</ModalTitle>

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
          Rücksetzen
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
          Finden
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
              style={{ width: "650px" }}
              placeholder="Name"
            />
          </Label>

          <Label>
            <InputEl
              type="date"
              {...register("birthDate")}
              style={{ width: "294px" }}
              placeholder="Date of Birth"
            />
          </Label>

          <Label>
            <InputEl
              {...register("cardNumber")}
              style={{ width: "206px" }}
              placeholder="Card number"
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
                  <HeadName>Vorname und Name</HeadName>
                  <HeadBirthDay>Geburtsdatum</HeadBirthDay>
                  <HeadCardNumber>Kennnummer</HeadCardNumber>
                  <HeadSelectBtn></HeadSelectBtn>
                </ListHeader>

                <ListBody>
                  {patientList.map(patient => (
                    <ListItem key={patient._id}>
                      <BodyName>
                        {patient.firstName} {patient.lastName}
                      </BodyName>
                      <BodyBirthDay>
                        {showBirthDate(patient.birthDate)}
                      </BodyBirthDay>
                      <BodyCardNumber>{patient.cardNumber}</BodyCardNumber>
                      <BodySelectBtn>
                        <SelectBtn
                          id="selectPatLink"
                          onClick={() => choosePatient(patient._id)}
                        >
                          Wählen
                        </SelectBtn>
                      </BodySelectBtn>
                    </ListItem>
                  ))}
                </ListBody>
              </List>
            )}

            {isError && (
              <NotFoundText>
                Patient mit solchen Daten wurde nicht gefunden
              </NotFoundText>
            )}
          </>
        )}
      </ModalBody>
    </>
  );
};
