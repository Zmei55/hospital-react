// import { useServicesFilter } from "entities/Service";
import {
  useAppSelector,
  Button as AddServiceBtn,
  Icon as IconPlus,
} from "shared";

import {
  FilteredList,
  FilteredItem,
  FilteredNameBox,
  FilteredCodeService,
  FilteredNameService,
  AddServiceBtnTitle,
} from "./SearchFilteredListEl.styled";

interface ISearchFilteredList {}

export const SearchFilteredListEl: React.FC<ISearchFilteredList> = () => {
  const filteredServices = useAppSelector(
    state => state.services.filteredServices
  );

  return (
    <FilteredList>
      {filteredServices.map(service => (
        <FilteredItem key={service.serviceCode}>
          <FilteredNameBox>
            <FilteredCodeService>{service.serviceCode}</FilteredCodeService>
            <FilteredNameService>{service.serviceName}</FilteredNameService>
          </FilteredNameBox>

          <AddServiceBtn
            id="addSerBtn"
            width="260px"
            height="88px"
            background="transparent"
            // onClick={() => addService(service)}
          >
            <IconPlus icon="plus-bold" size={24} color="blue" />
            <AddServiceBtnTitle>Hinzufügen</AddServiceBtnTitle>
          </AddServiceBtn>
        </FilteredItem>
      ))}
    </FilteredList>
  );
};
