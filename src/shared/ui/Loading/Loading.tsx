import { Spinner } from "shared";

import { LoadContainer, Title } from "./Loading.styled";

export const Loading: React.FC = () => {
  return (
    <>
      <LoadContainer>
        <Title>Einen Moment Geduld bitte...</Title>;
        <Spinner />
      </LoadContainer>
    </>
  );
};
