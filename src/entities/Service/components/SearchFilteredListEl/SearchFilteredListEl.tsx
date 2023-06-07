import { useAddService } from "entities/Service";
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
  const { addService } = useAddService();

  return (
    <FilteredList>
      {filteredServices.map(service => (
        <FilteredItem key={service._id}>
          <FilteredNameBox>
            <FilteredCodeService>{service.code}</FilteredCodeService>
            <FilteredNameService>{service.name}</FilteredNameService>
          </FilteredNameBox>

          <AddServiceBtn
            id="addSerBtn"
            height="88px"
            paddingRight="44px"
            paddingLeft="44px"
            background="transparent"
            onClick={() => addService(service)}
          >
            <IconPlus icon="plus-bold" size={24} color="blue" />
            <AddServiceBtnTitle>Hinzufügen</AddServiceBtnTitle>
          </AddServiceBtn>
        </FilteredItem>
      ))}
    </FilteredList>
  );
};
