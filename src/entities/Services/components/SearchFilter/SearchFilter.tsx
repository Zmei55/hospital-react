import { SearchFilteredListEl, IService } from "entities/Services";
import { InputEl as FilterInput } from "shared";

import { Filter } from "./SearchFilter.styled";

interface ISearchFilter {
  filter: string;
  handleFilter: React.ChangeEventHandler<HTMLInputElement>;
  visibleServices: IService[];
  addService: (service: IService) => void;
}

export const SearchFilterEl: React.FC<ISearchFilter> = ({
  filter,
  handleFilter,
  visibleServices,
  addService,
}) => {
  return (
    <Filter>
      <FilterInput
        width="842px"
        type="text"
        value={filter}
        onChange={handleFilter}
        autoFocus
        placeholder="Dienstname"
        marginBottom="48px"
      />

      <SearchFilteredListEl
        visibleServices={visibleServices}
        addService={addService}
      />
    </Filter>
  );
};
