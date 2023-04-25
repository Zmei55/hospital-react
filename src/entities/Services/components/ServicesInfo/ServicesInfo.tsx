import { deleteService, useSavedServicesList } from "entities/Services";
import { useAppSelector, Button as DeleteBtn, Icon } from "shared";

import {
  List,
  Item,
  NameBox,
  NameBoxHeader,
  Code,
  Name,
} from "./ServicesInfo.styled";

export const ServicesInfo: React.FC = () => {
  const servicesList = useAppSelector(state => state.services.services);
  const { savedServicesList, setSavedServicesList } = useSavedServicesList();

  return (
    <>
      <List>
        {servicesList.map(service => (
          <Item key={service.codeService}>
            <DeleteBtn
              width="52px"
              height="52px"
              background="transparent"
              border="none"
              onClick={() =>
                deleteService(
                  service.codeService,
                  savedServicesList,
                  setSavedServicesList
                )
              }
            >
              <Icon icon="trash" size={48} color="red" />
            </DeleteBtn>

            <NameBox>
              <NameBoxHeader>
                <Code>{service.codeService}</Code>
              </NameBoxHeader>

              <Name>{service.name}</Name>
            </NameBox>
          </Item>
        ))}
      </List>
    </>
  );
};
