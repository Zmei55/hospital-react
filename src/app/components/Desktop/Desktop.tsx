import { useAppNavigate } from "shared";
import {
  IconNewRequest,
  IconFindRequest,
  IconFindContainer,
  IconDocuments,
} from "app/icons";

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
          <IconNewRequest />
          <IconTitle>Erstellen Sie eine Bestellung</IconTitle>
        </IconContainer>
      </LargeBtn>

      <MediumBtn onClick={() => navigate("")}>
        <IconContainer>
          <IconFindRequest />
          <IconTitle>Finden Sie eine Bestellung</IconTitle>
        </IconContainer>
      </MediumBtn>

      <MediumBtn onClick={() => navigate("")}>
        <IconContainer>
          <IconFindContainer />
          <IconTitle>Finden Sie eine Behälter</IconTitle>
        </IconContainer>
      </MediumBtn>

      <SmallBtn onClick={() => navigate("")}>
        <IconContainer>
          <IconDocuments />
          <IconTitle>Unterlagen</IconTitle>
        </IconContainer>
      </SmallBtn>
    </Container>
  );
};
