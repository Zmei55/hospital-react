import { deleteService, ISavedServicesList } from "entities/Services";

import {
  SelectedServicesList,
  SelectedServicesItem,
  DeleteSelectedServicesBtn,
  IconTrash,
  SelectedServicesNameBox,
  SelectedServicesCode,
  SelectedServicesName,
} from "./ServicesInfo.styled";

export const ServicesInfo = ({
  savedServicesList,
  setSavedServicesList,
}: ISavedServicesList) => {
  return (
    <>
      <SelectedServicesList>
        {savedServicesList.map(service => (
          <SelectedServicesItem key={service.codeService}>
            <DeleteSelectedServicesBtn
              type="button"
              onClick={() =>
                deleteService(
                  service.codeService,
                  savedServicesList,
                  setSavedServicesList
                )
              }
            >
              <IconTrash />
            </DeleteSelectedServicesBtn>
            <SelectedServicesNameBox>
              <SelectedServicesCode>{service.codeService}</SelectedServicesCode>
              <SelectedServicesName>{service.name}</SelectedServicesName>
            </SelectedServicesNameBox>
          </SelectedServicesItem>
        ))}
      </SelectedServicesList>
    </>
  );
};
