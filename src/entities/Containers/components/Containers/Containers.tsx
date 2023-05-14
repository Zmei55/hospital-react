import { Icon } from "shared";

import { Container, Title, ModalBtn } from "./Containers.styled";

export const Containers: React.FC = () => {
  return (
    <Container>
      <Title>Containers</Title>
      <ModalBtn type="button" disabled>
        <Icon icon="test-tube" size={48} />
        Sie können Container nach dem Hinzufügen von Diensten berechnen
      </ModalBtn>
    </Container>
  );
};
