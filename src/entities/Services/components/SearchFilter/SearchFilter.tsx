import { SearchFilteredListEl, IService } from "entities/Services";

import { Filter, FilterInput } from "./SearchFilter.styled";

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
        type="text"
        value={filter}
        onChange={handleFilter}
        autoFocus
        placeholder="Dienstname"
      />

      <SearchFilteredListEl
        visibleServices={visibleServices}
        addService={addService}
      />
    </Filter>
  );
};
