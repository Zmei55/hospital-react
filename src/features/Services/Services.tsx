import {
  ServicesTitleBox,
  ServicesInfo,
  ServicesSearch,
  useHandleClearServicesList,
} from "entities/Services";

import { Container } from "./Services.styled";

export const Services: React.FC = () => {
  const [savedServicesList, setSavedServicesList, handleClearList] =
    useHandleClearServicesList([]);

  return (
    <Container>
      <ServicesTitleBox
        savedServicesList={savedServicesList}
        handleClearList={handleClearList}
      />

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
