import { TitleBoxEl, InfoEl, SearchEl } from "entities/Service";
import { useAppSelector } from "shared";

import { Container } from "./ServicesEl.styled";

export const ServicesEl: React.FC = () => {
  const services = useAppSelector(state => state.services.services);

  return (
    <Container className="services-container">
      <TitleBoxEl />

      {services.length > 0 ? <InfoEl /> : <SearchEl />}
    </Container>
  );
};
