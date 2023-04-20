import { Patient } from "features/Patient";
import { Services } from "features/Services";
import { Containers } from "features/Containers";
import { useAppNavigate, Button as CloseBtn, Icon } from "shared";

import { Container, Header, Body, HeaderTitle, Box } from "./Request.styled";

export const Request: React.FC = () => {
  const [navigate] = useAppNavigate();

  return (
    <Container>
      <Header>
        <HeaderTitle>Neue Bestellung</HeaderTitle>
        <CloseBtn
          width="72px"
          height="72px"
          background="red"
          onClick={() => navigate("/desktop")}
        >
          <Icon icon="cross" size={48} color="white" />
        </CloseBtn>
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
