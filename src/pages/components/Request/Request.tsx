import { useAppDispatch } from "shared/types";
import { fetchPatient } from "app/redux";
import { Patient } from "entities/Patient";
import { Services } from "entities/Services";
import { Containers } from "entities/Containers";

import {
  Container,
  Header,
  Body,
  RouterLink,
  HeaderTitle,
  CloseBtn,
  Box,
  IconCross,
} from "./Request.styled";

type TPatient = {
  _id: string;
  name: string;
  birthDate: string;
  cardNumber: number;
  gender: string;
  phoneNumber: string;
  email: string;
  identityDocument: string;
  residenceAddress: {
    street: string;
    houseNumber: string;
    city: string;
    postcode: string;
  };
  services: never[];
  containers: never[];
};

type TInitialState = {
  data: {
    result: TPatient;
  };
};

const initialPatient: TInitialState = {
  data: {
    result: {
      _id: "",
      name: "",
      birthDate: "",
      cardNumber: 0,
      gender: "",
      phoneNumber: "",
      email: "",
      identityDocument: "",
      residenceAddress: {
        street: "",
        houseNumber: "",
        city: "",
        postcode: "",
      },
      services: [],
      containers: [],
    },
  },
};

export const Request: React.FC = () => {
  const dispatch = useAppDispatch();

  const clearPatient = (): void => {
    dispatch(fetchPatient(initialPatient));
  };

  return (
    <Container>
      <Header>
        <HeaderTitle>Neue Bestellung</HeaderTitle>
        <RouterLink to="/desktop">
          <CloseBtn type="button" onClick={clearPatient}>
            <IconCross />
          </CloseBtn>
        </RouterLink>
      </Header>

      <Body>
        <Patient />

        <Box>
          <Services />

          <Containers />
        </Box>
      </Body>
    </Container>
  );
};
