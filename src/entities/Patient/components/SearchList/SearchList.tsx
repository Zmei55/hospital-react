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
} from "./SearchList.styled";

interface ISearchList {
  patientsList: IPatient[];
}

export const SearchList: React.FC<ISearchList> = ({ patientsList }) => {
  const { choosePatient } = useChoosePatient("");

  return (
    <List>
      <ListHeader>
        <HeadName>Vorname und Name</HeadName>
        <HeadBirthDay>Geburtsdatum</HeadBirthDay>
        <HeadCardNumber>Kennnummer</HeadCardNumber>
        <HeadSelectBtn></HeadSelectBtn>
      </ListHeader>

      <ListBody>
        {patientsList.map(({ _id, name, birthDate, cardNumber }) => (
          <ListItem key={_id}>
            <BodyName>{name}</BodyName>
            <BodyBirthDay>{showBirthDate(birthDate)}</BodyBirthDay>
            <BodyCardNumber>{cardNumber}</BodyCardNumber>
            <BodySelectBtn>
              <SelectBtn onClick={() => choosePatient(_id)}>Select</SelectBtn>
            </BodySelectBtn>
          </ListItem>
        ))}
      </ListBody>
    </List>
  );
};
