import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'types';
import {
  useFetchPatientByIdQuery,
  useFetchPatientByNameMutation,
  fetchPatientByName,
  resetPatientsList,
} from 'redux/patients';
import { fetchPatient } from 'redux/appSlice';
import { Modal } from 'components/Modal';
import { SpinnerCenterBox, Spinner } from 'components/Spinner';
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
} from './PatientSearch.styled';

export function PatientSearch() {
  const dispatch = useAppDispatch();
  const patientsList = useAppSelector(state => state.patients.patients);
  const [fetchPatientsList, { isLoading }] = useFetchPatientByNameMutation();
  const [patientId, setPatientId] = useState<string>('');
  const { data: patient } = useFetchPatientByIdQuery(patientId, {
    skip: patientId === '',
  });

  const [formState, setFormState] = useState({
    name: '',
    birthDate: '',
    cardNumber: '',
  });
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    if (patient !== undefined) {
      dispatch(fetchPatient(patient));
    }
  }, [dispatch, patient]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { name, value },
  }) => setFormState(prev => ({ ...prev, [name]: value }));

  const handlePatientsListFind = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    try {
      const patientsList = await fetchPatientsList(formState);
      dispatch(fetchPatientByName(patientsList));
    } catch (error) {
      console.log('ERROR patientsListFormSubmit');
    }
  };

  const clearPatientsList = (): void => {
    dispatch(resetPatientsList([]));
    setFormState({
      name: '',
      birthDate: '',
      cardNumber: '',
    });
  };

  const handleResetPatientsList: React.MouseEventHandler<
    HTMLButtonElement
  > = () => {
    clearPatientsList();
  };

  const choosePatient = (event: string) => {
    setPatientId(event);
    clearPatientsList();
  };

  const toggleModal = () => {
    setShowModal(!showModal);
    clearPatientsList();
  };

  const showBirthDate = (birthDate: string) => {
    return birthDate.slice(0, 10).split('-').reverse().join(' ');
  };

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
                <ResetBtn type="button" onClick={handleResetPatientsList}>
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
