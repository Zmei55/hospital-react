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

  return (
    <Container>
      <LargeBtn onClick={() => navigate("/request")}>
        <IconContainer>
          <Icon icon="create-document" color="blue" size={140} />
          <IconTitle>Erstellen Sie eine Bestellung</IconTitle>
        </IconContainer>
      </LargeBtn>

      <MediumBtn onClick={() => navigate("")}>
        <IconContainer>
          <Icon icon="find-document" color="blue" size={140} />
          <IconTitle>Finden Sie eine Bestellung</IconTitle>
        </IconContainer>
      </MediumBtn>

      <MediumBtn onClick={() => navigate("")}>
        <IconContainer>
          <Icon icon="find-test-tube" color="blue" size={140} />
          <IconTitle>Finden Sie eine Behälter</IconTitle>
        </IconContainer>
      </MediumBtn>

      <SmallBtn onClick={() => navigate("")}>
        <IconContainer>
          <Icon icon="documents" color="blue" size={140} />
          <IconTitle>Unterlagen</IconTitle>
        </IconContainer>
      </SmallBtn>
    </Container>
  );
};
