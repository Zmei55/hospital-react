import {
  ServicesInfo,
  ServicesSearch,
  useHandleClearServicesList,
} from "entities/Services";
import { Button as ResetBtn } from "shared";

import { Container, TitleBox, Title } from "./Services.styled";

export const Services: React.FC = () => {
  const [savedServicesList, setSavedServicesList, handleClearList] =
    useHandleClearServicesList([]);

  return (
    <Container>
      <TitleBox>
        <Title>Services</Title>

        {savedServicesList.length > 0 && (
          <ResetBtn
            width="217px"
            height="48px"
            background="grey"
            onClick={handleClearList}
          >
            Stornieren
          </ResetBtn>
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
