import { Modal, SpinnerCenterBox, Spinner } from "shared";
import {
  useChoosePatient,
  usePatientsListFind,
  useClearPatientsList,
  useToggleModal,
  showBirthDate,
} from "entities/Patient";

import {
  Container,
  ModalBtn,
  IconSelectPatient,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ButtonContainer,
  ResetBtn,
  FindBtn,
  CloseBtn,
  IconCross,
  Form,
  Label,
  NameInput,
  BirthDayInput,
  MedicalCardInput,
  PatientsList,
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
} from "./PatientSearch.styled";

export function PatientSearch() {
  const [
    formState,
    handleChange,
    handlePatientsListFind,
    isLoading,
    patientsList,
  ] = usePatientsListFind();
  const [showModal, toggleModal] = useToggleModal(false);
  const [clearPatientsList] = useClearPatientsList();
  const [choosePatient] = useChoosePatient("");

  return (
    <Container>
      <ModalBtn type="button" onClick={toggleModal} aria-label="find patient">
        <IconSelectPatient />
        Wählen Sie einen Patient aus
      </ModalBtn>

      {showModal && (
        <Modal onClose={toggleModal}>
          <ModalContainer>
            <ModalHeader>
              <ModalTitle>Wählen Sie einen Patient aus</ModalTitle>

              <ButtonContainer>
                <ResetBtn type="button" onClick={clearPatientsList}>
                  Reset
                </ResetBtn>

                <FindBtn onClick={handlePatientsListFind}>Find</FindBtn>

                <CloseBtn onClick={toggleModal}>
                  <IconCross />
                </CloseBtn>
              </ButtonContainer>
            </ModalHeader>

            <Form onSubmit={handlePatientsListFind}>
              <Label>
                <NameInput
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Name"
                />
              </Label>

              <Label>
                <BirthDayInput
                  type="date"
                  name="birthDate"
                  value={formState.birthDate}
                  onChange={handleChange}
                  placeholder="Date of Birth"
                />
              </Label>

              <Label>
                <MedicalCardInput
                  type="text"
                  name="cardNumber"
                  value={formState.cardNumber}
                  onChange={handleChange}
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
                {patientsList.length > 0 && (
                  <PatientsList>
                    <ListHeader>
                      <HeadName>Vorname und Name</HeadName>
                      <HeadBirthDay>Geburtsdatum</HeadBirthDay>
                      <HeadCardNumber>Kennnummer</HeadCardNumber>
                      <HeadSelectBtn></HeadSelectBtn>
                    </ListHeader>

                    <ListBody>
                      {patientsList.map(
                        ({ _id, name, birthDate, cardNumber }) => (
                          <ListItem key={_id}>
                            <BodyName>{name}</BodyName>
                            <BodyBirthDay>
                              {showBirthDate(birthDate)}
                            </BodyBirthDay>
                            <BodyCardNumber>{cardNumber}</BodyCardNumber>
                            <BodySelectBtn>
                              <SelectBtn onClick={() => choosePatient(_id)}>
                                Select
                              </SelectBtn>
                            </BodySelectBtn>
                          </ListItem>
                        )
                      )}
                    </ListBody>
                  </PatientsList>
                )}
              </>
            )}
          </ModalContainer>
        </Modal>
      )}
    </Container>
  );
}
