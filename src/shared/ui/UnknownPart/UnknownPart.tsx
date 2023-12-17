import { useTranslation } from "react-i18next";
import { useAppNavigate, Button as CloseBtn, Icon } from "shared";

import { Container, Header, Title, Body, Text } from "./UnknownPart.styled";

export const UnknownPart: React.FC = () => {
  const { handleNavigate } = useAppNavigate();
  const { t } = useTranslation();

  return (
    <Container>
      <Header>
        <Title>{t("unknownPart.title")}</Title>

        <CloseBtn
          id="closeNeuRequestBtn"
          background="red"
          style={{
            width: "72px",
            height: "72px",
          }}
          onClick={() => handleNavigate("/desktop")}
        >
          <Icon icon="cross" size={48} color="white" />
        </CloseBtn>
      </Header>

      <Body>
        <Text>{t("unknownPart.text")}</Text>
      </Body>
    </Container>
  );
};
