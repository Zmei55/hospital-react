import {
  ServicesTitleBox,
  ServicesInfo,
  ServicesSearch,
} from "entities/Services";
import { useAppSelector } from "shared";

import { Container } from "./Services.styled";

export const Services: React.FC = () => {
  const servicesList = useAppSelector(state => state.services.services);

  return (
    <Container>
      <ServicesTitleBox />

      {servicesList.length > 0 ? <ServicesInfo /> : <ServicesSearch />}
    </Container>
  );
};
