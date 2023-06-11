import { useServicesFilter } from "entities/Service";
import {
  InputEl as FilterInput,
  useInput,
  Button as FindBtn,
  Spinner,
} from "shared";

import { FilterHeader } from "./SearchFilterEl.styled";

interface ISearchFilter {}

export const SearchFilterEl: React.FC<ISearchFilter> = () => {
  const [filter, , handleFilter] = useInput("");
  const { handleServicesListFind, isLoading } = useServicesFilter(filter);

  return (
    <FilterHeader>
      <FilterInput
        width="660px"
        type="text"
        value={filter}
        onChange={handleFilter}
        autoFocus
        placeholder="Dienstname"
        marginBottom="48px"
      />

      <FindBtn
        id="findSearchPatBtn"
        width="162px"
        height="72px"
        background="blue"
        marginLeft="24px"
        onClick={handleServicesListFind}
      >
        {isLoading ? <Spinner /> : <span>Finden</span>}
      </FindBtn>
    </FilterHeader>
  );
};
