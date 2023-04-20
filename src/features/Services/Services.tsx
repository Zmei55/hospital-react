import {
  ServicesInfo,
  ServicesSearch,
  useHandleClearServicesList,
} from "entities/Services";

import { Container, TitleBox, Title, ResetListBtn } from "./Services.styled";

export const Services: React.FC = () => {
  const [savedServicesList, setSavedServicesList, handleClearList] =
    useHandleClearServicesList([]);

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
