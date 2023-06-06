import { useDeleteSelectedService } from "entities/Service";
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
  const selectedServicesList = useAppSelector(
    state => state.services.selectedServices
  );
  const { removeSelectedService } = useDeleteSelectedService();

  return (
    <SelectedServicesList>
      {selectedServicesList.map(service => (
        <SelectedServicesItem key={service.code}>
          <DeleteBtn
            id="delSelectedSerBtn"
            width="56px"
            height="56px"
            background="transparent"
            border="none"
            marginRight="24px"
            onClick={() => removeSelectedService(service._id)}
          >
            <Icon icon="trash" size={48} color="red" />
          </DeleteBtn>

          <SelectedServicesNameBox>
            <SelectedServicesCode>{service.code}</SelectedServicesCode>

            <SelectedServicesName>{service.name}</SelectedServicesName>
          </SelectedServicesNameBox>
        </SelectedServicesItem>
      ))}
    </SelectedServicesList>
  );
};
