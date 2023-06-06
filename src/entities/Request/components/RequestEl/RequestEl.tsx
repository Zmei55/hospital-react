import { PatientEl, useClearPatient } from "entities/Patient";
import { ServicesEl } from "entities/Service";
import { Containers } from "entities/Container";
import {
  useAppSelector,
  useAppNavigate,
  Button as CloseBtn,
  Icon,
} from "shared";

import {
  Container,
  Header,
  RequestNumber,
  Body,
  HeaderTitle,
  Box,
} from "./RequestEl.styled";

export const Request: React.FC = () => {
  const [navigate] = useAppNavigate();
  const requestNumber = useAppSelector(state => state.request.requestNumber);
  const { clearPatient } = useClearPatient();

  const handleCloseBtn = () => {
    clearPatient();
    navigate("/desktop");
  };

  return (
    <Container>
      <Header>
        <HeaderTitle>
          Neue Bestellung <RequestNumber>№{requestNumber}</RequestNumber>
        </HeaderTitle>
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
