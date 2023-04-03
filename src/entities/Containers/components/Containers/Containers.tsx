import {
  Container,
  Title,
  ModalBtn,
  IconContainerAdd,
} from './Containers.styled';

export const Containers: React.FC = () => {
  return (
    <Container>
      <Title>Containers</Title>
      <ModalBtn type="button" disabled>
        <IconContainerAdd />
        Sie können Container nach dem Hinzufügen von Diensten berechnen
      </ModalBtn>
    </Container>
  );
};
