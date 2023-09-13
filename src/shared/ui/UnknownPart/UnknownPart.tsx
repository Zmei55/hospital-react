import { useAppNavigate, Button as CloseBtn, Icon } from "shared";

import { Container, Header, Title, Body, Text } from "./UnknownPart.styled";

export const UnknownPart: React.FC = () => {
  const [navigate] = useAppNavigate();

  return (
    <Container>
      <Header>
        <Title>UnknownPart</Title>

        <CloseBtn
          id="closeNeuRequestBtn"
          background="red"
          style={{
            width: "72px",
            height: "72px",
          }}
          onClick={() => navigate("/desktop")}
        >
          <Icon icon="cross" size={48} color="white" />
        </CloseBtn>
      </Header>

      <Body>
        <Text>
          Leider weiß ich nicht, wie dieser Block funktioniert, daher bitte ich
          mich zu verstehen und zu verzeihen.
        </Text>
      </Body>
    </Container>
  );
};
