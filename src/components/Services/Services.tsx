import { useState } from 'react';
import { ServicesInfo } from 'components/ServicesInfo';
import { ServicesSearch } from 'components/ServicesSearch';

import { Container, Title } from './Services.styled';

type TService = {
  name: string;
  codeService: string;
};

type TServicesList = TService[];

export const Services: React.FC = () => {
  const [savedServicesList, setSavedServicesList] = useState<TServicesList>([]);

  return (
    <Container>
      <Title>Services</Title>

      {savedServicesList.length > 0 ? (
        <ServicesInfo savedServicesList={savedServicesList} />
      ) : (
        <ServicesSearch setSavedServicesList={setSavedServicesList} />
      )}
    </Container>
  );
};
