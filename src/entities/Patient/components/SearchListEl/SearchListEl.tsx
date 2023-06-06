import { useChoosePatient, IPatient, showBirthDate } from "entities/Patient";
import {
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
} from "./SearchListEl.styled";

interface ISearchList {
  patientsList: IPatient[];
}

export const SearchListEl: React.FC<ISearchList> = ({ patientsList }) => {
  const { choosePatient } = useChoosePatient();

  return (
    <List>
      <ListHeader>
        <HeadName>Vorname und Name</HeadName>
        <HeadBirthDay>Geburtsdatum</HeadBirthDay>
        <HeadCardNumber>Kennnummer</HeadCardNumber>
        <HeadSelectBtn></HeadSelectBtn>
      </ListHeader>

      <ListBody>
        {patientsList.map(patient => (
          <ListItem key={patient._id}>
            <BodyName>{patient.name}</BodyName>
            <BodyBirthDay>{showBirthDate(patient.birthDate)}</BodyBirthDay>
            <BodyCardNumber>{patient.cardNumber}</BodyCardNumber>
            <BodySelectBtn>
              <SelectBtn
                id="selectPatLink"
                onClick={() => choosePatient(patient)}
              >
                Wählen
              </SelectBtn>
            </BodySelectBtn>
          </ListItem>
        ))}
      </ListBody>
    </List>
  );
};
