import { useTranslation } from "react-i18next";
import { useAppNavigate, Button as CloseBtn, Icon } from "shared";

import { Container, Header, Title, Body, Text } from "./UnknownPart.styled";

export const UnknownPart: React.FC = () => {
  const [navigate] = useAppNavigate();
  const { t } = useTranslation();

  return (
    <Container>
      <Header>
        <Title>{t("UnknownPart.title")}</Title>

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
        <Text>{t("UnknownPart.text")}</Text>
      </Body>
    </Container>
  );
};
