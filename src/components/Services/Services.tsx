import { useState } from "react";
import { ServicesInfo } from "components/ServicesInfo";
import { ServicesSearch } from "components/ServicesSearch";

import { Container } from "./Services.styled";

type TService = {
  name: string;
  codeService: string;
};

type TServicesList = TService[];

export const Services: React.FC = () => {
  const [savedServicesList, setSavedServicesList] = useState<TServicesList>([]);

  return (
    <Container>
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
