import { Patient } from "entities/Patient";
import { Services } from "entities/Services";
import { Containers } from "entities/Containers";
import { CrossRedBtn } from "shared";

import {
  Container,
  Header,
  Body,
  RouterLink,
  HeaderTitle,
  Box,
} from "./Request.styled";

export const Request: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderTitle>Neue Bestellung</HeaderTitle>
        <RouterLink to="/desktop">
          <CrossRedBtn style={{ width: "72px", height: "72px" }} />
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
