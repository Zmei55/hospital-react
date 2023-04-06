import { ISavedServicesList } from "entities/Services";

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
  const deleteService = (codeService: string) => {
    setSavedServicesList(
      savedServicesList.filter(service => service.codeService !== codeService)
    );
  };

  return (
    <>
      <SelectedServicesList>
        {savedServicesList.map(service => (
          <SelectedServicesItem key={service.codeService}>
            <DeleteSelectedServicesBtn
              type="button"
              onClick={() => deleteService(service.codeService)}
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
