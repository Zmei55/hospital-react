import { useState } from "react";
import { ServicesInfo, ServicesSearch, TServicesList } from "entities/Services";

import { Container, TitleBox, Title, ResetListBtn } from "./Services.styled";

export const Services: React.FC = () => {
  const [savedServicesList, setSavedServicesList] = useState<TServicesList>([]);

  const handleClearList: React.MouseEventHandler<HTMLButtonElement> = () => {
    setSavedServicesList([]);
  };

  return (
    <Container>
      <TitleBox>
        <Title>Services</Title>

        {savedServicesList.length > 0 && (
          <ResetListBtn type="button" onClick={handleClearList}>
            Stornieren
          </ResetListBtn>
        )}
      </TitleBox>

      {savedServicesList.length > 0 ? (
        <ServicesInfo
          savedServicesList={savedServicesList}
          setSavedServicesList={setSavedServicesList}
        />
      ) : (
        <ServicesSearch setSavedServicesList={setSavedServicesList} />
      )}
    </Container>
  );
};
