import { useAppSelector, Icon } from "shared";

import { Container, Title, ModalBtn, ButtonTitle } from "./Containers.styled";

export const Containers: React.FC = () => {
  const servicesList = useAppSelector(state => state.services.services);

  return (
    <Container>
      <Title>Containers</Title>
      <ModalBtn type="button" disabled={servicesList.length === 0}>
        <Icon icon="test-tube" size={48} />
        {servicesList.length === 0 ? (
          <ButtonTitle>
            Sie können Container nach dem Hinzufügen von Diensten berechnen
          </ButtonTitle>
        ) : (
          <ButtonTitle>Sie können Container berechnen</ButtonTitle>
        )}
      </ModalBtn>
    </Container>
  );
};
