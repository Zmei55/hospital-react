import { PatientEl } from "features/Patient";
import { ServicesEl } from "features/Services";
import { Containers } from "features/Containers";
import { useClearPatient } from "entities/Patient";
import { useAppNavigate, Button as CloseBtn, Icon } from "shared";

import { Container, Header, Body, HeaderTitle, Box } from "./Request.styled";

export const Request: React.FC = () => {
  const [navigate] = useAppNavigate();
  const { clearPatient } = useClearPatient();

  const handleCloseBtn = () => {
    navigate("/desktop");
    clearPatient();
  };

  return (
    <Container>
      <Header>
        <HeaderTitle>Neue Bestellung</HeaderTitle>
        <CloseBtn
          id="closeNeuRequestBtn"
          width="72px"
          height="72px"
          background="red"
          onClick={handleCloseBtn}
        >
          <Icon icon="cross" size={48} color="white" />
        </CloseBtn>
      </Header>

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
