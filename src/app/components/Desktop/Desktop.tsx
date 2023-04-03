import {
  Container,
  LargeContainer,
  MediumContainer,
  SmallContainer,
  DesktopLink,
  IconContainer,
  IconTitle,
  IconNewRequest,
  IconFindRequest,
  IconFindContainer,
  IconDocuments,
} from './Desktop.styled';

export const Desktop: React.FC = () => {
  return (
    <Container>
      <LargeContainer>
        <DesktopLink to="/patient">
          <IconContainer>
            <IconNewRequest />
            <IconTitle>Erstellen Sie eine Bestellung</IconTitle>
          </IconContainer>
        </DesktopLink>
      </LargeContainer>

      <MediumContainer>
        <DesktopLink to={''}>
          <IconContainer>
            <IconFindRequest />
            <IconTitle>Finden Sie eine Bestellung</IconTitle>
          </IconContainer>
        </DesktopLink>
      </MediumContainer>

      <MediumContainer>
        <DesktopLink to={''}>
          <IconContainer>
            <IconFindContainer />
            <IconTitle>Finden Sie eine Behälter</IconTitle>
          </IconContainer>
        </DesktopLink>
      </MediumContainer>

      <SmallContainer>
        <DesktopLink to={''}>
          <IconContainer>
            <IconDocuments />
            <IconTitle>Unterlagen</IconTitle>
          </IconContainer>
        </DesktopLink>
      </SmallContainer>
    </Container>
  );
};
