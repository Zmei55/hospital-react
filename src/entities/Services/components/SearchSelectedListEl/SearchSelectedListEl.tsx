import { IService } from "entities/Services";
import { Button as DeleteBtn, Icon } from "shared";

import {
  SelectedServicesList,
  SelectedServicesItem,
  SelectedServicesNameBox,
  SelectedServicesCode,
  SelectedServicesName,
} from "./SearchSelectedListEl.styled";

interface ISearchSelectedList {
  selectedServices: IService[];
  deleteService: (
    id: string,
    list: IService[],
    setList: (e: IService[]) => void
  ) => void;
  setSelectedServices: React.Dispatch<React.SetStateAction<IService[]>>;
}

export const SearchSelectedListEl: React.FC<ISearchSelectedList> = ({
  selectedServices,
  deleteService,
  setSelectedServices,
}) => {
  return (
    <SelectedServicesList>
      {selectedServices.map(service => (
        <SelectedServicesItem key={service.codeService}>
          <DeleteBtn
            id="delSelectedSerBtn"
            width="56px"
            height="56px"
            background="transparent"
            border="none"
            onClick={() =>
              deleteService(
                service.codeService,
                selectedServices,
                setSelectedServices
              )
            }
          >
            <Icon icon="trash" size={48} color="red" />
          </DeleteBtn>

          <SelectedServicesNameBox>
            <SelectedServicesCode>{service.codeService}</SelectedServicesCode>

            <SelectedServicesName>{service.name}</SelectedServicesName>
          </SelectedServicesNameBox>
        </SelectedServicesItem>
      ))}
    </SelectedServicesList>
  );
};
