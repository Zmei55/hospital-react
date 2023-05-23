import { TitleBoxEl, InfoEl, SearchEl } from "entities/Service";
import { useAppSelector } from "shared";

import { Container } from "./ServicesEl.styled";

export const ServicesEl: React.FC = () => {
  const services = useAppSelector(state => state.services.services);
  const patient = useAppSelector(state => state.patients.patient);

  return (
    <Container>
      <TitleBoxEl />

      {services.length > 0 && patient._id !== "" ? <InfoEl /> : <SearchEl />}
    </Container>
  );
};
