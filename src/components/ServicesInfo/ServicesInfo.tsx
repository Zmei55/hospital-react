import {
  SelectedServicesList,
  SelectedServicesItem,
  DeleteSelectedServicesBtn,
  IconTrash,
  SelectedServicesNameBox,
  SelectedServicesCode,
  SelectedServicesName,
} from "./ServicesInfo.styled";

type TService = {
  name: string;
  codeService: string;
};

type TServicesList = TService[];

type TSavedServicesList = {
  savedServicesList: TService[];
  setSavedServicesList(e: TServicesList): void;
};

export const ServicesInfo = ({
  savedServicesList,
  setSavedServicesList,
}: TSavedServicesList) => {
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
