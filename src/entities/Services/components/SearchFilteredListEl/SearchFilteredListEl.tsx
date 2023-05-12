import { IService } from "entities/Services";
import { Button as AddServiceBtn, Icon as IconPlus } from "shared";

import {
  FilteredList,
  FilteredItem,
  FilteredNameBox,
  FilteredCodeService,
  FilteredNameService,
  AddServiceBtnTitle,
} from "./SearchFilteredListEl.styled";

interface ISearchFilteredList {
  visibleServices: IService[];
  addService: (service: IService) => void;
}

export const SearchFilteredListEl: React.FC<ISearchFilteredList> = ({
  visibleServices,
  addService,
}) => {
  return (
    <FilteredList>
      {visibleServices.map(service => (
        <FilteredItem key={service.codeService}>
          <FilteredNameBox>
            <FilteredCodeService>{service.codeService}</FilteredCodeService>
            <FilteredNameService>{service.name}</FilteredNameService>
          </FilteredNameBox>

          <AddServiceBtn
            id="addSerBtn"
            width="260px"
            height="88px"
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
