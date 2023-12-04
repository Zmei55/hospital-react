import { HeaderEl } from "entities/Request";
import { PatientEl } from "entities/Patient";
import { ServicesEl } from "entities/Service";
import { Containers } from "entities/Container";

import { Container, Body, Box } from "./RequestEl.styled";

export const Request: React.FC = () => {
  return (
    <Container className="new-request">
      <HeaderEl />

      <Body className="new-request-body">
        <PatientEl />

        <Box className="new-request-secondary-container">
          <ServicesEl />

          <Containers />
        </Box>
      </Body>
    </Container>
  );
};
