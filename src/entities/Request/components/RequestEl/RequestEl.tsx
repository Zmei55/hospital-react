import { HeaderEl } from "entities/Request";
import { PatientEl } from "entities/Patient";
import { ServicesEl } from "entities/Service";
import { Containers } from "entities/Container";

import { Container, Body, Box } from "./RequestEl.styled";

export const Request: React.FC = () => {
  return (
    <Container>
      <HeaderEl />

      <Body>
        <PatientEl />

        <Box>
          <ServicesEl />

          <Containers />
        </Box>
      </Body>
    </Container>
  );
};
