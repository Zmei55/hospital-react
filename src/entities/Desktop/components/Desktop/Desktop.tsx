import { useTranslation } from "react-i18next";
import { useNewRequest } from "entities/Desktop";
import { useAppNavigate, Icon } from "shared";

import {
  Container,
  LargeBtn,
  MediumBtn,
  SmallBtn,
  IconContainer,
  IconTitle,
} from "./Desktop.styled";

export const Desktop: React.FC = () => {
  const [navigate] = useAppNavigate();
  const { handleNewRequest } = useNewRequest();
  const { t } = useTranslation();

  return (
    <Container>
      <LargeBtn id="newRequestBtn" onClick={handleNewRequest}>
        <IconContainer>
          <Icon icon="create-document" color="blue" size={140} />
          <IconTitle>{t("desktop.addRequest")}</IconTitle>
        </IconContainer>
      </LargeBtn>

      <MediumBtn id="findRequestBtn" onClick={() => navigate("/find-request")}>
        <IconContainer>
          <Icon icon="find-document" color="blue" size={140} />
          <IconTitle>{t("desktop.findRequest")}</IconTitle>
        </IconContainer>
      </MediumBtn>

      <MediumBtn
        id="findContainersBtn"
        onClick={() => navigate("/unknown-part")}
      >
        <IconContainer>
          <Icon icon="find-test-tube" color="blue" size={140} />
          <IconTitle>{t("desktop.findContainer")}</IconTitle>
        </IconContainer>
      </MediumBtn>

      <SmallBtn id="documentsBtn" onClick={() => navigate("/unknown-part")}>
        <IconContainer>
          <Icon icon="documents" color="blue" size={140} />
          <IconTitle>{t("desktop.documents")}</IconTitle>
        </IconContainer>
      </SmallBtn>
    </Container>
  );
};
