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

  return (
    <Container>
      <LargeBtn id="newRequestBtn" onClick={handleNewRequest}>
        <IconContainer>
          <Icon icon="create-document" color="blue" size={140} />
          <IconTitle>Erstellen Sie einen Antrag</IconTitle>
        </IconContainer>
      </LargeBtn>

      <MediumBtn id="findRequestBtn" onClick={() => navigate("")}>
        <IconContainer>
          <Icon icon="find-document" color="blue" size={140} />
          <IconTitle>Finden Sie einen Antrag</IconTitle>
        </IconContainer>
      </MediumBtn>

      <MediumBtn id="findContainersBtn" onClick={() => navigate("")}>
        <IconContainer>
          <Icon icon="find-test-tube" color="blue" size={140} />
          <IconTitle>Finden Sie eine Behälter</IconTitle>
        </IconContainer>
      </MediumBtn>

      <SmallBtn id="documentsBtn" onClick={() => navigate("")}>
        <IconContainer>
          <Icon icon="documents" color="blue" size={140} />
          <IconTitle>Unterlagen</IconTitle>
        </IconContainer>
      </SmallBtn>
    </Container>
  );
};
