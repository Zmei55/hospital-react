import { useTranslation } from "react-i18next";
import { useNewRequest, useFindRequest } from "entities/Desktop";
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
  const { handleFindRequest } = useFindRequest();
  const { t } = useTranslation();

  return (
    <Container data-testid="desktop-page">
      <LargeBtn data-testid="newRequestBtn" onClick={handleNewRequest}>
        <IconContainer>
          <Icon icon="create-document" color="blue" size={140} />
          <IconTitle>{t("desktop.addRequest")}</IconTitle>
        </IconContainer>
      </LargeBtn>

      <MediumBtn data-testid="findRequestBtn" onClick={handleFindRequest}>
        <IconContainer>
          <Icon icon="find-document" color="blue" size={140} />
          <IconTitle>{t("desktop.findRequest")}</IconTitle>
        </IconContainer>
      </MediumBtn>

      <MediumBtn
        data-testid="findContainersBtn"
        onClick={() => navigate("/unknown-part")}
      >
        <IconContainer>
          <Icon icon="find-test-tube" color="blue" size={140} />
          <IconTitle>{t("desktop.findContainer")}</IconTitle>
        </IconContainer>
      </MediumBtn>

      <SmallBtn
        data-testid="documentsBtn"
        onClick={() => navigate("/unknown-part")}
      >
        <IconContainer>
          <Icon icon="documents" color="blue" size={140} />
          <IconTitle>{t("desktop.documents")}</IconTitle>
        </IconContainer>
      </SmallBtn>
    </Container>
  );
};
