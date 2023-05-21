import { deleteService, useSavedServicesList } from "entities/Services";
import { useAppSelector, Button as DeleteBtn, Icon } from "shared";

import {
  List,
  Item,
  ServiceNameBox,
  ServiceNameHeader,
  Code,
  ServiceName,
  LaborName,
} from "./InfoEl.styled";

export const InfoEl: React.FC = () => {
  const servicesList = useAppSelector(state => state.services.services);
  const { savedServicesList, setSavedServicesList } = useSavedServicesList();

  return (
    <>
      <List>
        {servicesList.map(service => (
          <Item key={service.serviceCode}>
            <DeleteBtn
              id="delSerInfoBtn"
              width="52px"
              height="52px"
              background="transparent"
              border="none"
              onClick={() =>
                deleteService(
                  service.serviceCode,
                  savedServicesList,
                  setSavedServicesList
                )
              }
            >
              <Icon icon="trash" size={48} color="red" />
            </DeleteBtn>

            <ServiceNameBox>
              <ServiceNameHeader>
                <Code>{service.serviceCode}</Code>

                <LaborName>{service.labor}</LaborName>
              </ServiceNameHeader>

              <ServiceName>{service.serviceName}</ServiceName>
            </ServiceNameBox>
          </Item>
        ))}
      </List>
    </>
  );
};
