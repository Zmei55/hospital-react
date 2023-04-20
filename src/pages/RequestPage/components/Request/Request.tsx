import { Patient } from "entities/Patient";
import { Services } from "entities/Services";
import { Containers } from "entities/Containers";
import { useAppNavigate, Button, Icon } from "shared";

import { Container, Header, Body, HeaderTitle, Box } from "./Request.styled";

export const Request: React.FC = () => {
  const [navigate] = useAppNavigate();

  return (
    <Container>
      <Header>
        <HeaderTitle>Neue Bestellung</HeaderTitle>
        <Button
          width="72px"
          height="72px"
          background="red"
          onClick={() => navigate("/desktop")}
        >
          <Icon icon="cross" size={48} color="white" />
        </Button>
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
