import { useDeleteService } from "entities/Service";
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
  const laborList = useAppSelector(state => state.services.labors);
  const detailsList = useAppSelector(state => state.services.details);
  const { removeService } = useDeleteService();

  return (
    <>
      <List>
        {servicesList.map(service => (
          <Item key={service._id}>
            <DeleteBtn
              id="delSerInfoBtn"
              width="52px"
              height="52px"
              background="transparent"
              border="none"
              marginRight="24px"
              onClick={() => removeService(service._id)}
            >
              <Icon icon="trash" size={48} color="red" />
            </DeleteBtn>

            <ServiceNameBox>
              <ServiceNameHeader>
                <Code>{service.code}</Code>

                {detailsList.map(
                  detail =>
                    detail.serviceId === service._id &&
                    laborList.map(
                      labor =>
                        labor._id === detail.laborId && (
                          <LaborName key={labor._id}>{labor.name}</LaborName>
                        )
                    )
                )}
              </ServiceNameHeader>

              <ServiceName>{service.name}</ServiceName>
            </ServiceNameBox>
          </Item>
        ))}
      </List>
    </>
  );
};
