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

export const Request: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderTitle>Neue Bestellung</HeaderTitle>
        <RouterLink to="/desktop">
          <CloseBtn type="button">
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
