import { ServicesSearchFilteredList, IService } from "entities/Services";

import { Filter, FilterInput } from "./ServicesSearchFilter.styled";

interface IServicesSearchFilter {
  filter: string;
  handleFilter: React.ChangeEventHandler<HTMLInputElement>;
  visibleServices: IService[];
  addService: (service: IService) => void;
}

export const ServicesSearchFilter: React.FC<IServicesSearchFilter> = ({
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

      <ServicesSearchFilteredList
        visibleServices={visibleServices}
        addService={addService}
      />
    </Filter>
  );
};
