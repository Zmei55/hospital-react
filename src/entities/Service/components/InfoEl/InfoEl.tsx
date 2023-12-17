import { useServiceDelete } from "entities/Service";
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
  const { removeService } = useServiceDelete();

  return (
    <>
      {servicesList && (
        <List data-testid="services-info-list">
          {servicesList.map(service => (
            <Item key={service._id} data-testid="services-info-listitem">
              <DeleteBtn
                data-testid="delete-service-info-btn"
                background="transparent"
                style={{
                  width: "52px",
                  height: "52px",
                  border: "none",
                  marginRight: "24px",
                }}
                onClick={() => removeService(service._id)}
              >
                <Icon icon="trash" size={48} color="red" />
              </DeleteBtn>

              <ServiceNameBox data-testid="services-info-box">
                <ServiceNameHeader data-testid="services-info-box-header">
                  <Code data-testid="services-info-box-service-code">
                    {service.code}
                  </Code>

                  {detailsList && laborList && (
                    <>
                      {detailsList.map(
                        detail =>
                          detail.serviceId === service._id.toString() &&
                          laborList.map(
                            labor =>
                              labor._id.toString() === detail.laborId && (
                                <LaborName
                                  key={labor._id}
                                  data-testid="services-info-box-labor-name"
                                >
                                  {labor.name}
                                </LaborName>
                              )
                          )
                      )}
                    </>
                  )}
                </ServiceNameHeader>

                <ServiceName data-testid="services-info-box-service-name">
                  {service.name}
                </ServiceName>
              </ServiceNameBox>
            </Item>
          ))}
        </List>
      )}
    </>
  );
};
