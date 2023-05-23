import { IService } from "entities/Service";
import { useAppSelector, Button as DeleteBtn, Icon } from "shared";

import {
  SelectedServicesList,
  SelectedServicesItem,
  SelectedServicesNameBox,
  SelectedServicesCode,
  SelectedServicesName,
} from "./SearchSelectedListEl.styled";

interface ISearchSelectedList {}

export const SearchSelectedListEl: React.FC<ISearchSelectedList> = () => {
  return (
    <SelectedServicesList>
      {/* {selectedServices.map(service => (
        <SelectedServicesItem key={service.serviceCode}>
          <DeleteBtn
            id="delSelectedSerBtn"
            width="56px"
            height="56px"
            background="transparent"
            border="none"
            marginRight="24px"
            onClick={() =>
              deleteService(
                service.serviceCode,
                selectedServices,
                setSelectedServices
              )
            }
          >
            <Icon icon="trash" size={48} color="red" />
          </DeleteBtn>

          <SelectedServicesNameBox>
            <SelectedServicesCode>{service.serviceCode}</SelectedServicesCode>

            <SelectedServicesName>{service.serviceName}</SelectedServicesName>
          </SelectedServicesNameBox>
        </SelectedServicesItem>
      ))} */}
    </SelectedServicesList>
  );
};
